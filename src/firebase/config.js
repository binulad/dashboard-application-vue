import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH9nE3WZ9RCZnRT-7RlEqvOoEefkjoAlI",
  authDomain: "vue-dashboard-d777e.firebaseapp.com",
  databaseURL: "https://vue-dashboard-d777e-default-rtdb.firebaseio.com",
  projectId: "vue-dashboard-d777e",
  storageBucket: "vue-dashboard-d777e.appspot.com",
  messagingSenderId: "569355274654",
  appId: "1:569355274654:web:3635c3867701342d9a6e8f",
  measurementId: "G-BC54J170GM",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init firestore service
const projectFireStore = firebase.firestore();

export { projectFireStore };
