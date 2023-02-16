import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

let firebaseConfig = {
  apiKey: "AIzaSyBFxBms1MrGU-P8-ryrwtw1nlKL4ly5LEI",
  authDomain: "gaio-84619.firebaseapp.com",
  projectId: "gaio-84619",
  storageBucket: "gaio-84619.appspot.com",
  messagingSenderId: "225546755969",
  appId: "1:225546755969:web:1966c4c20cd18426ec9280",
  measurementId: "G-LK81YPLFVS"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase

