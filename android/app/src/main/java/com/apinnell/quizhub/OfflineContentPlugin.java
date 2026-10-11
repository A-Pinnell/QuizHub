package com.apinnell.quizhub;

import android.content.SharedPreferences;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import org.json.JSONArray;
import org.json.JSONObject;

@CapacitorPlugin(name = "OfflineContent")
public class OfflineContentPlugin extends Plugin {
    private static final String RELEASE_API =
        "https://api.github.com/repos/A-Pinnell/QuizHub/releases/latest";
    private static final long MAX_EXTRACTED_BYTES = 1024L * 1024L * 1024L;
    private final ExecutorService executor = Executors.newSingleThreadExecutor();

    @PluginMethod
    public void getOfflineStatus(PluginCall call) {
        try {
            JSONObject status = readInstalledStatus();
            JSObject result = new JSObject();
            result.put("installed", status != null);
            result.put("version", status == null ? JSONObject.NULL : status.optString("version"));
            call.resolve(result);
        } catch (Exception error) {
            call.reject("Unable to read offline files.", error);
        }
    }

    @PluginMethod
    public void checkForUpdates(PluginCall call) {
        executor.execute(() -> {
            try {
                JSONObject release = fetchLatestRelease();
                JSObject result = new JSObject();
                result.put("latestVersion", release.getString("tag_name"));
                call.resolve(result);
            } catch (Exception error) {
                call.reject("Unable to check for QuizHub updates.", error);
            }
        });
    }

    @PluginMethod
    public void downloadOffline(PluginCall call) {
        executor.execute(() -> {
            File archive = new File(getContext().getCacheDir(), "offline-site.zip");
            File target = new File(getContext().getFilesDir(), "offline-content");
            File pending = new File(getContext().getFilesDir(), "offline-content.pending");
            File previous = new File(getContext().getFilesDir(), "offline-content.previous");
            try {
                JSONObject release = fetchLatestRelease();
                String assetUrl = findOfflineAsset(release);
                downloadArchive(assetUrl, archive);
                emitProgress("extract", 0, 0);
                extractArchive(archive, pending);
                JSONObject metadata = readMetadata(new File(pending, "version.json"));
                if (!release.getString("tag_name").equals(metadata.getString("version"))) {
                    throw new IOException("Downloaded offline version does not match the release.");
                }
                if (!new File(pending, "index.html").isFile()) {
                    throw new IOException("Offline package is missing index.html.");
                }
                replaceOfflineDirectory(pending, target, previous);
                getActivity().runOnUiThread(() -> {
                    String basePath = target.getAbsolutePath();
                    getBridge().setServerBasePath(basePath);
                    SharedPreferences preferences =
                        getContext().getSharedPreferences(
                            com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME,
                            android.content.Context.MODE_PRIVATE);
                    preferences.edit()
                        .putString(com.getcapacitor.plugin.WebView.CAP_SERVER_PATH, basePath)
                        .apply();
                    call.resolve(new JSObject().put("reloading", true));
                });
            } catch (Exception error) {
                deleteTree(pending);
                call.reject("Unable to install the offline version.", error);
            } finally {
                if (archive.exists() && !archive.delete()) {
                    archive.deleteOnExit();
                }
            }
        });
    }

    private JSONObject readInstalledStatus() throws Exception {
        File directory = new File(getContext().getFilesDir(), "offline-content");
        File index = new File(directory, "index.html");
        File metadataFile = new File(directory, "version.json");
        if (!index.isFile() || !metadataFile.isFile()) return null;
        return readMetadata(metadataFile);
    }

    private JSONObject fetchLatestRelease() throws Exception {
        HttpURLConnection connection = openConnection(RELEASE_API);
        connection.setRequestProperty("Accept", "application/vnd.github+json");
        try (InputStream input = connection.getInputStream()) {
            return new JSONObject(readText(input));
        } finally {
            connection.disconnect();
        }
    }

    private String findOfflineAsset(JSONObject release) throws Exception {
        JSONArray assets = release.getJSONArray("assets");
        for (int i = 0; i < assets.length(); i++) {
            JSONObject asset = assets.getJSONObject(i);
            if ("offline-site.zip".equals(asset.optString("name"))) {
                return asset.getString("browser_download_url");
            }
        }
        throw new IOException("Latest release does not include offline-site.zip.");
    }

    private void downloadArchive(String sourceUrl, File archive) throws Exception {
        HttpURLConnection connection = openConnection(sourceUrl);
        connection.setInstanceFollowRedirects(true);
        int total = connection.getContentLength();
        if (connection.getResponseCode() < 200 || connection.getResponseCode() >= 300) {
            throw new IOException("Offline download failed with HTTP " + connection.getResponseCode());
        }
        try (InputStream input = new BufferedInputStream(connection.getInputStream());
             FileOutputStream output = new FileOutputStream(archive)) {
            byte[] buffer = new byte[64 * 1024];
            long received = 0;
            int count;
            while ((count = input.read(buffer)) != -1) {
                output.write(buffer, 0, count);
                received += count;
                emitProgress("download", received, total);
            }
        } finally {
            connection.disconnect();
        }
    }

    private void extractArchive(File archive, File destination) throws Exception {
        deleteTree(destination);
        if (!destination.mkdirs()) throw new IOException("Unable to create offline directory.");
        String root = destination.getCanonicalPath() + File.separator;
        long totalBytes = 0;
        int entries = 0;
        try (ZipInputStream input =
                 new ZipInputStream(new BufferedInputStream(new FileInputStream(archive)))) {
            ZipEntry entry;
            byte[] buffer = new byte[32 * 1024];
            while ((entry = input.getNextEntry()) != null) {
                if (++entries > 20000) throw new IOException("Offline package has too many files.");
                File outputFile = new File(destination, entry.getName());
                String canonical = outputFile.getCanonicalPath();
                if (!canonical.startsWith(root)) throw new IOException("Unsafe path in offline package.");
                if (entry.isDirectory()) {
                    if (!outputFile.mkdirs() && !outputFile.isDirectory()) {
                        throw new IOException("Unable to create offline directory.");
                    }
                } else {
                    File parent = outputFile.getParentFile();
                    if (parent == null || (!parent.mkdirs() && !parent.isDirectory())) {
                        throw new IOException("Unable to create offline file directory.");
                    }
                    try (BufferedOutputStream output = new BufferedOutputStream(
                             new FileOutputStream(outputFile))) {
                        int count;
                        while ((count = input.read(buffer)) != -1) {
                            totalBytes += count;
                            if (totalBytes > MAX_EXTRACTED_BYTES) {
                                throw new IOException("Offline package exceeds the 1 GB safety limit.");
                            }
                            output.write(buffer, 0, count);
                        }
                    }
                }
                input.closeEntry();
            }
        }
    }

    private void replaceOfflineDirectory(File pending, File target, File previous) throws IOException {
        deleteTree(previous);
        if (target.exists() && !target.renameTo(previous)) {
            throw new IOException("Unable to back up the current offline version.");
        }
        if (!pending.renameTo(target)) {
            if (previous.exists() && !previous.renameTo(target)) {
                throw new IOException("Unable to restore the previous offline version.");
            }
            throw new IOException("Unable to activate the new offline version.");
        }
        deleteTree(previous);
    }

    private JSONObject readMetadata(File file) throws Exception {
        try (InputStream input = new FileInputStream(file)) {
            return new JSONObject(readText(input));
        }
    }

    private String readText(InputStream input) throws IOException {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buffer = new byte[8192];
        int count;
        while ((count = input.read(buffer)) != -1) output.write(buffer, 0, count);
        return output.toString(StandardCharsets.UTF_8.name());
    }

    private HttpURLConnection openConnection(String address) throws IOException {
        HttpURLConnection connection = (HttpURLConnection) new URL(address).openConnection();
        connection.setConnectTimeout(20000);
        connection.setReadTimeout(120000);
        connection.setRequestProperty("User-Agent", "QuizHub-Android");
        return connection;
    }

    private void emitProgress(String phase, long received, long total) {
        getActivity().runOnUiThread(() -> {
            JSObject progress = new JSObject();
            progress.put("phase", phase);
            progress.put("received", received);
            progress.put("total", total);
            notifyListeners("downloadProgress", progress);
        });
    }

    private void deleteTree(File file) {
        if (!file.exists()) return;
        File[] children = file.listFiles();
        if (children != null) {
            for (File child : children) deleteTree(child);
        }
        if (!file.delete()) {
            android.util.Log.w("QuizHub", "Unable to remove temporary offline file: " + file);
        }
    }

    @Override
    protected void handleOnDestroy() {
        executor.shutdownNow();
        super.handleOnDestroy();
    }
}
