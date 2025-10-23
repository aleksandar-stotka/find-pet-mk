// firebase/config.js
import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2rMCn6-nYjXzwzZJUxDhq0ThjpYBc3vo",
  authDomain: "macedon-ani.firebaseapp.com",
  projectId: "macedon-ani",
  storageBucket: "macedon-ani.firebasestorage.app",
  messagingSenderId: "578129065475",
  appId: "1:578129065475:web:16b555775457e8f07ec036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

// Timestamp helper
const timestamp = serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
