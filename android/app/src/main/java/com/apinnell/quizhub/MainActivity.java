package com.apinnell.quizhub;

import android.content.SharedPreferences;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.plugin.WebView;
import java.io.File;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(OfflineContentPlugin.class);
        registerPlugin(AudioFocusPlugin.class);
        super.onCreate(savedInstanceState);
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
