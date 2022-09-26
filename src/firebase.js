import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl1sM24N_AViTjGDia3B8NPLDONBFqLhg",
  authDomain: "whatsapp-d82a4.firebaseapp.com",
  projectId: "whatsapp-d82a4",
  storageBucket: "whatsapp-d82a4.appspot.com",
  messagingSenderId: "807133026363",
  appId: "1:807133026363:web:97cd34de30a4ea4755e41e",
  measurementId: "G-D0MKJ3FW45"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
