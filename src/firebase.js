import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4Ak7p4aJRg-KXaLd1-N76595cNQk7FeA",
  authDomain: "todo-app-raksha.firebaseapp.com",  
  projectId: "todo-app-raksha",
  storageBucket: "todo-app-raksha.appspot.com",
  messagingSenderId: "575194666837",
  appId: "1:575194666837:web:b902c756118c9d12cc41dc",
  measurementId: "G-0D9Z8HWEEJ"
});

const db = firebaseApp.firestore();

export default db;