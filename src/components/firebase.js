import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUXoPKm5J23rYjYNdu05c4EAZd_ugsx1Q",
  authDomain: "slack-clone-b88ac.firebaseapp.com",
  projectId: "slack-clone-b88ac",
  storageBucket: "slack-clone-b88ac.appspot.com",
  messagingSenderId: "405856946703",
  appId: "1:405856946703:web:5cc9bec03ccdc1117cb17a"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };