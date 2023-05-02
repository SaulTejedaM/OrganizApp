import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyD5e7ZJ4IJlxUOezr7SyGWxeIE2fe_jWuY",
  authDomain: "organizapp-6c914.firebaseapp.com",
  projectId: "organizapp-6c914",
  storageBucket: "organizapp-6c914.appspot.com",
  messagingSenderId: "447288139021",
  appId: "1:447288139021:web:a72ec9d1a44319972da444"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)