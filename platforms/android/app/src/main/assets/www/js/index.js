document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    FirebasePlugin.getToken(fcm_token => {
        console.log("FCM Token: "+fcm_token);
        /*
        if (window.localStorage.getItem("api_token") != null) {
            const api_token = window.localStorage.getItem("api_token");
            $.ajax({
                type: "POST",
                url: api_host + 'update_fcm_token',
                data: {
                    _method: 'PUT',
                    api_token: api_token,
                    fcm_token: fcm_token
                },
                success: data => {
                    console.log(JSON.stringify(data));
                },
                error: err => console.log(JSON.stringify(err))
            });
        }
        */
    });
    FirebasePlugin.onMessageReceived( message => {
            console.log(JSON.stringify(message));
            /*
            if (message.messageType === "notification") {
                if (message.tap) {

                } else {

                }
            }
            */
    });

}
