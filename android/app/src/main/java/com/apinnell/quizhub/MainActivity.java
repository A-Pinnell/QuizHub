package com.apinnell.quizhub;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSExport;
import com.getcapacitor.JSExportException;
import com.getcapacitor.plugin.WebView;
import java.io.File;
import java.util.Arrays;
import java.util.Collections;

public class MainActivity extends BridgeActivity {
    private static final String TAG = "QuizHub";
    private static final String HOSTED_APP_ORIGIN = "https://a-pinnell.github.io";
    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(OfflineContentPlugin.class);
        registerPlugin(AudioFocusPlugin.class);
        super.onCreate(savedInstanceState);
        injectBridgeIntoHostedApp();
        selectStartupContent();
        monitorConnectivity();
    }

    private void selectStartupContent() {
        File offlineDirectory = getOfflineContentDirectory();
        boolean offlineContentInstalled = hasInstalledOfflineContent(offlineDirectory);
        boolean offlineContentSelected =
            offlineContentInstalled && !hasValidatedInternetConnection();
        SharedPreferences preferences = getSharedPreferences(
            WebView.WEBVIEW_PREFS_NAME, MODE_PRIVATE);

        SharedPreferences.Editor editor = preferences.edit();
        if (offlineContentSelected) {
            editor.putString(WebView.CAP_SERVER_PATH, offlineDirectory.getAbsolutePath());
        } else {
            editor.remove(WebView.CAP_SERVER_PATH);
        }
        editor.apply();

        if (offlineContentSelected) {
            Bridge bridge = getBridge();
            if (bridge == null || bridge.getWebView() == null) {
                Log.e(TAG, "Could not load installed offline content because the WebView is unavailable.");
                return;
            }
            // Capacitor clears this preference on first launch after a binary update.
            bridge.setServerBasePath(offlineDirectory.getAbsolutePath());
        }
    }

    private boolean hasValidatedInternetConnection() {
        ConnectivityManager manager =
            (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        if (manager == null) return false;

        Network activeNetwork = manager.getActiveNetwork();
        if (activeNetwork == null) return false;

        NetworkCapabilities capabilities =
            manager.getNetworkCapabilities(activeNetwork);
        return capabilities != null
            && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
            && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED);
    }

    private void monitorConnectivity() {
        connectivityManager =
            (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivityManager == null) {
            Log.e(TAG, "Could not monitor network connectivity for offline fallback.");
            return;
        }
        networkCallback = new ConnectivityManager.NetworkCallback() {
            @Override
            public void onLost(Network network) {
                scheduleOfflineFallback();
            }

            @Override
            public void onCapabilitiesChanged(
                Network network,
                NetworkCapabilities capabilities
            ) {
                if (!capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)) {
                    scheduleOfflineFallback();
                }
            }
        };
        try {
            connectivityManager.registerDefaultNetworkCallback(networkCallback);
        } catch (RuntimeException error) {
            Log.e(TAG, "Could not register network callback for offline fallback.", error);
        }
    }

    private void scheduleOfflineFallback() {
        mainHandler.postDelayed(() -> useOfflineContentWhenDisconnected(), 1200);
    }

    private void useOfflineContentWhenDisconnected() {
        if (hasValidatedInternetConnection()) return;

        Bridge bridge = getBridge();
        if (bridge == null || bridge.getWebView() == null) {
            Log.e(TAG, "Could not switch to offline content because the WebView is unavailable.");
            return;
        }

        String currentUrl = bridge.getWebView().getUrl();
        if (currentUrl == null || !currentUrl.startsWith(HOSTED_APP_ORIGIN + "/")) return;

        File offlineDirectory = getOfflineContentDirectory();
        if (!hasInstalledOfflineContent(offlineDirectory)) {
            Log.w(TAG, "Offline fallback is unavailable because no complete offline package is installed.");
            return;
        }
        getSharedPreferences(WebView.WEBVIEW_PREFS_NAME, MODE_PRIVATE)
            .edit()
            .putString(WebView.CAP_SERVER_PATH, offlineDirectory.getAbsolutePath())
            .apply();
        bridge.setServerBasePath(offlineDirectory.getAbsolutePath());
    }

    private File getOfflineContentDirectory() {
        return new File(getFilesDir(), "offline-content");
    }

    private boolean hasInstalledOfflineContent(File directory) {
        return new File(directory, "index.html").isFile()
            && new File(directory, "assets").isDirectory()
            && new File(directory, "version.json").isFile();
    }

    private void injectBridgeIntoHostedApp() {
        Bridge bridge = getBridge();
        if (bridge == null) return;
        if (!WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
            Log.e(TAG, "This Android System WebView cannot inject the bridge into hosted QuizHub pages.");
            return;
        }

        try {
            String script = JSExport.getGlobalJS(
                getApplicationContext(),
                bridge.getConfig().isLoggingEnabled(),
                bridge.isDevMode()
            ) + "\nwindow.WEBVIEW_SERVER_URL = '" + bridge.getLocalUrl() + "';\n"
                + JSExport.getBridgeJS(getApplicationContext()) + "\n"
                + JSExport.getPluginJS(Arrays.asList(
                    bridge.getPlugin("OfflineContent"),
                    bridge.getPlugin("AudioFocus")
                ));
            WebViewCompat.addDocumentStartJavaScript(
                bridge.getWebView(),
                script,
                Collections.singleton(HOSTED_APP_ORIGIN)
            );
        } catch (JSExportException error) {
            Log.e(TAG, "Could not inject the native bridge into hosted QuizHub pages.", error);
        }
    }

    @Override
    public void onPause() {
        Bridge bridge = getBridge();
        if (bridge != null && bridge.getWebView() != null) {
            bridge.getWebView().evaluateJavascript(
                "document.querySelectorAll('audio,video').forEach(media => media.pause());",
                null);
            bridge.getWebView().onPause();
        }
        super.onPause();
    }

    @Override
    public void onResume() {
        Bridge bridge = getBridge();
        if (bridge != null && bridge.getWebView() != null) {
            bridge.getWebView().onResume();
        }
        super.onResume();
    }

    @Override
    public void onDestroy() {
        if (connectivityManager != null && networkCallback != null) {
            try {
                connectivityManager.unregisterNetworkCallback(networkCallback);
            } catch (IllegalArgumentException error) {
                Log.w(TAG, "Network callback was already unregistered.", error);
            }
        }
        mainHandler.removeCallbacksAndMessages(null);
        super.onDestroy();
    }
}
