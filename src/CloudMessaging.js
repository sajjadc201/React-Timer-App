import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBGOIft2wYezpuyHkHHIOIHhqmwuJKr80",
  authDomain: "timer-app-8bbd8.firebaseapp.com",
  projectId: "timer-app-8bbd8",
  storageBucket: "timer-app-8bbd8.appspot.com",
  messagingSenderId: "515165421740",
  appId: "1:515165421740:web:100686add6287ffd311f09",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("token", currentToken);
          } else {
            // Show permission request.
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}

export default firebase;
