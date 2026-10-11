package com.apinnell.quizhub;

import android.content.SharedPreferences;
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
        super.onCreate(savedInstanceState);
        injectBridgeIntoHostedApp();
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
    public void onStart() {
        super.onStart();
        if (getBridge() == null) return;

        File offlineDirectory = new File(getFilesDir(), "offline-content");
        if (!new File(offlineDirectory, "index.html").isFile()
            || !new File(offlineDirectory, "version.json").isFile()) {
            return;
        }

        String offlinePath = offlineDirectory.getAbsolutePath();
        if (!offlinePath.equals(getBridge().getServerBasePath())) {
            getBridge().setServerBasePath(offlinePath);
            SharedPreferences preferences = getSharedPreferences(
                WebView.WEBVIEW_PREFS_NAME, MODE_PRIVATE);
            preferences.edit().putString(WebView.CAP_SERVER_PATH, offlinePath).apply();
        }
    }
}
