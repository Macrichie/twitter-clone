import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAopPUgo5A7w3Dj1z3smz6mR6oePd13vYA",
  authDomain: "twitter-clone-2e95a.firebaseapp.com",
  databaseURL: "https://twitter-clone-2e95a.firebaseio.com",
  projectId: "twitter-clone-2e95a",
  storageBucket: "twitter-clone-2e95a.appspot.com",
  messagingSenderId: "219487726035",
  appId: "1:219487726035:web:2941b854eea89b342ca726",
  measurementId: "G-L944BHB5QV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
