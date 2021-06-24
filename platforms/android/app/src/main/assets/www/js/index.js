/*
const host = "http://dotech.dyndns.biz:16666";
const api_host = host + "/help_desk/public/api/";
*/
const api_host = "http://bb757a9733f4.ngrok.io/api/";
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("Spinner " + SpinnerPlugin);
    FirebasePlugin.getToken(fcm_token => {
        console.log("FCM Token: " + fcm_token);
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

    });
    FirebasePlugin.onMessageReceived(message => {
        console.log(JSON.stringify(message));
        /*
        if (message.messageType === "notification") {
            if (message.tap) {

            } else {

            }
        }
        */
    });

    init();

}


init = () => {
    console.log("Iniciando procesos");
    //$("#main_menu").load("./main_menu.html");
    if (window.localStorage.getItem("api_token") != null) {

        const api_token = window.localStorage.getItem("api_token");
        if (checkConnection()) {
            $.ajax({
                type: "GET",
                url: api_host + "user",
                data: { api_token: api_token },
                success: (data) => {
                    //console.log("User " + JSON.stringify(data));
                    user = data;
                    if (JSON.stringify(data).indexOf("<!DOCTYPE html>") < 0) {

                        if (document.title == "index") {
                            $(".splash").css("display", "none");
                            window.location = "menu.html";
                        }
                    } else {
                        $(".splash").css("display", "none");
                        swal(
                            "Error",
                            "No se ha podido obtener la información esperada, verifique que cuenta con una conexión activa a internet."
                        );
                    }
                },
                error: (error) => console.log(JSON.stringify(error)),
            });
        } else {
            $(".splash").css("display", "none");
            swal(
                "Error",
                "No se pudo conectar a internet por favor verifique su conexión e intente de nuevo."
            );
        }
        /*
        if (document.title == 'menu') {
            $.ajax({
                type: "GET",
                url: api_host + "get_current_version",
                data: { api_token: api_token },
                success: data => {
                    console.log(data);
                    cordova.getAppVersion.getVersionNumber(function(version) {
                        const currentVersion = data.currentVersion;
                        if (currentVersion != version) {

                            if (confirm("Se encontró una nueva versión de la aplicación.\n¿Descargar?")) {
                                $.ajax({
                                    type: "POST",
                                    url: api_host + "user_dounload_new_version",
                                    data: { api_token: api_token, version: currentVersion },
                                    success: data => {
                                        console.log(data);
                                        let v = currentVersion.replace('.', '-');
                                        window.open(host + "/dotech/public/mobile/dotech_mobile_" + v.replace('.', '-') + ".apk");
                                    },
                                    error: err => console.log(err)
                                });
                            }
                        }
                    });

                },
                error: err => console.log(err)
            });
        }
        */

    } else {
        $(".splash").css("display", "none");
    }
    console.log(navigator.vibrate);
};

forceLower = (strInput) => {
    strInput.value = strInput.value.toLowerCase();
};

testEmail = (email) => {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!re.exec(email)) {
        $("#span_login_email").text("Ingrese un e-mail válido por favor");
        return true;
    }
};

checkConnection = () => {
    try {
        const networkState = navigator.connection.type;
        switch (networkState) {
            case "unknown":
                return false;
                break;
            case "ethernet":
                return true;
                break;
            case "wifi":
                return true;
                break;
            case "2g":
                return true;
                break;
            case "3g":
                return true;
                break;
            case "4g":
                return true;
                break;
            case "cellular":
                return true;
                break;
            case "none":
                return false;
                break;
            default:
                return true;
        }
    } catch (e) {}
};

loading = (title, text) => {
    swal({
        title: title,
        text: text,
        imageUrl: "./img/loading.gif",
        showConfirmButton: false,
    });
};

startLoading = (text) => {
    try {
        SpinnerPlugin.activityStart(text, { dimBackground: true });
    } catch (e) {}
};

stopLoading = () => {
    try {
        SpinnerPlugin.activityStop();
    } catch (e) {}
};

vbrt = time => navigator.vibrate(time);

toastSuccess = message => {
    try {
        window.plugins.toast.showWithOptions({
            message: message,
            duration: "short",
            position: "center",
            styling: {
                opacity: 0.75,
                backgroundColor: "#2ECC71",
                textColor: "#FDFEFE",
                textSize: 20.5,
                cornerRadius: 16,
                horizontalPadding: 20,
                verticalPadding: 16,
            },
        });
    } catch (e) { console.log("Toast: " + message); }
}

toastError = message => {
    try {
        window.plugins.toast.showWithOptions({
            message: message,
            duration: "short",
            position: "center",
            styling: {
                opacity: 0.75,
                backgroundColor: "#C0392B",
                textColor: "#FDFEFE",
                textSize: 20.5,
                cornerRadius: 16,
                horizontalPadding: 20,
                verticalPadding: 16,
            },
        });
    } catch (e) { console.log("Toast: " + message); }
}