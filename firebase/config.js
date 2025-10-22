// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD2rMCn6-nYjXzwzZJUxDhq0ThjpYBc3vo",
  authDomain: "macedon-ani.firebaseapp.com",
  projectId: "macedon-ani",
  storageBucket: "macedon-ani.firebasestorage.app",
  messagingSenderId: "578129065475",
  appId: "1:578129065475:web:16b555775457e8f07ec036"
}; 
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };