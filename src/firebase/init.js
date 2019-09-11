import firebase from "firebase";
//import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBlbqtqpgxwsl3w7gCaRA9vjbblT_RYfsA",
  authDomain: "ninja-chat-1543b.firebaseapp.com",
  databaseURL: "https://ninja-chat-1543b.firebaseio.com",
  projectId: "ninja-chat-1543b",
  storageBucket: "ninja-chat-1543b.appspot.com",
  messagingSenderId: "354398621972",
  appId: "1:354398621972:web:23a374736a2157576c7201"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
