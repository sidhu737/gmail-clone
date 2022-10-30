import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDHP7l-JdX1FYO9J0W9s2mGrhx_8SPh5Ag",
  authDomain: "clone-dbbbc.firebaseapp.com",
  projectId: "clone-dbbbc",
  storageBucket: "clone-dbbbc.appspot.com",
  messagingSenderId: "575847146023",
  appId: "1:575847146023:web:4396420ca1b33400606402",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
