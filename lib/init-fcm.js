import * as firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBBdZ6yUD94uwzKfMatif5UYtO8Sqgblpg",
  authDomain: "virus-hack-project.firebaseapp.com",
  databaseURL: "https://virus-hack-project.firebaseio.com",
  projectId: "virus-hack-project",
  storageBucket: "virus-hack-project.appspot.com",
  messagingSenderId: "431061864422",
  appId: "1:431061864422:web:fe761ca9587e75237a1027",
  measurementId: "G-7M41M01C4P"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();
export { messaging };
