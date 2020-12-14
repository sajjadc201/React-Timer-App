importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

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
