package com.apinnell.quizhub;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.Bundle;
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

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(OfflineContentPlugin.class);
        registerPlugin(AudioFocusPlugin.class);
        selectStartupContent();
        super.onCreate(savedInstanceState);
        injectBridgeIntoHostedApp();
    }

    private void selectStartupContent() {
        File offlineDirectory = new File(getFilesDir(), "offline-content");
        boolean offlineVersionInstalled =
            new File(offlineDirectory, "index.html").isFile()
                && new File(offlineDirectory, "assets").isDirectory()
                && new File(offlineDirectory, "version.json").isFile();
        SharedPreferences preferences = getSharedPreferences(
            WebView.WEBVIEW_PREFS_NAME, MODE_PRIVATE);

        SharedPreferences.Editor editor = preferences.edit();
        if (offlineVersionInstalled && !hasValidatedInternetConnection()) {
            editor.putString(WebView.CAP_SERVER_PATH, offlineDirectory.getAbsolutePath());
        } else {
            editor.remove(WebView.CAP_SERVER_PATH);
        }
        editor.apply();
    }

    private boolean hasValidatedInternetConnection() {
        ConnectivityManager connectivityManager =
            (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivityManager == null) return false;

        Network activeNetwork = connectivityManager.getActiveNetwork();
        if (activeNetwork == null) return false;

        NetworkCapabilities capabilities =
            connectivityManager.getNetworkCapabilities(activeNetwork);
        return capabilities != null
            && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
            && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED);
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
}
