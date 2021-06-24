cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-x-toast.Toast",
      "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
      "pluginId": "cordova-plugin-x-toast",
      "clobbers": [
        "window.plugins.toast"
      ]
    },
    {
      "id": "cordova-plugin-spinner.SpinnerPlugin",
      "file": "plugins/cordova-plugin-spinner/www/spinner-plugin.js",
      "pluginId": "cordova-plugin-spinner",
      "clobbers": [
        "SpinnerPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-firebasex": "13.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-x-toast": "2.7.2",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-spinner": "1.1.0"
  };
});