import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {

  
  apiKey: "AIzaSyAypjujB8hCwJIACKb5-Illb4zqx1oEors",
  authDomain: "emalawi19-pdf-hub.firebaseapp.com",
  projectId: "emalawi19-pdf-hub",
  storageBucket: "emalawi19-pdf-hub.firebasestorage.app",
  messagingSenderId: "223832507949",
  appId: "1:223832507949:web:dbbb8c7b758847292e5aa4",
  measurementId: "G-S5K2ZZND28"

    

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
