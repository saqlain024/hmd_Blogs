// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: 'AIzaSyD7qKC_zr3cot4D66-tCmyKWiXV8z7A0Yw',
  authDomain: 'react-hooks-blog-cdd51.firebaseapp.com',
  projectId: 'react-hooks-blog-cdd51',
  storageBucket: 'react-hooks-blog-cdd51.appspot.com',
  messagingSenderId: '71445398206',
  appId: '1:71445398206:web:3ab394b4e327ee0d5a54ef',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const firestore = app.firestore();