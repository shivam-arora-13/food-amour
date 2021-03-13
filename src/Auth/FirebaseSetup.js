import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHeRtaCuQCiBwWJocRgf7gRV7bv2JNE0M",
    authDomain: "food-amour-1378.firebaseapp.com",
    projectId: "food-amour-1378",
    storageBucket: "food-amour-1378.appspot.com",
    messagingSenderId: "136075929871",
    appId: "1:136075929871:web:5c5e6a8b0cf8683f03b67a",
    measurementId: "G-L4HRRJ64SD"
  };

firebase.initializeApp(firebaseConfig);
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var twitterProvider = new firebase.auth.TwitterAuthProvider();