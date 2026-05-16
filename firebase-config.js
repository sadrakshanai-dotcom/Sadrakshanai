/**
 * firebase-config.js — Sadrakshan.AI
 * Firebase initialization: Authentication + Firestore
 *
 * HOW TO USE:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project (e.g., "sadrakshanai")
 * 3. Enable Authentication → Sign-in methods → Email/Password AND Google
 * 4. Enable Firestore Database (start in production mode)
 * 5. Go to Project Settings → Your apps → Add web app
 * 6. Copy your config object and paste it below, replacing the placeholder values
 * 7. Add this script to every HTML page BEFORE any other scripts:
 *    <script type="module" src="firebase-config.js"></script>
 */

// ─────────────────────────────────────────────────────────────────────────────
// PASTE YOUR FIREBASE CONFIG HERE — replace every value below
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAQ9AS6RprieboUxiiepu-_ChZQMde4UBk",
  authDomain: "sadrakshanai.com",          // e.g. sadrakshanai.firebaseapp.com
  projectId: "sadrakshanai-df96a",           // e.g. sadrakshanai
  storageBucket: "sadrakshanai-df96a.firebasestorage.app",       // e.g. sadrakshanai.appspot.com
  messagingSenderId: "191369840680",  // numeric ID
  appId: "1:191369840680:web:4cd47cd03eb2a81c2e4d1d",               // starts with 1:
  measurementId: "G-YK79G2YYBN"    // starts with G- (optional here, used in analytics.js)
};
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ─────────────────────────────────────────────────────────────────────────────
// ADMIN UID — hardcode the Firebase UID of the administrator account here
// After registering your admin account, find the UID in Firebase Console →
// Authentication → Users → copy the UID column value
// ─────────────────────────────────────────────────────────────────────────────
const ADMIN_UID = "p2weWRxjKfgzfQl7ZqR9eE9u5vb2";

export { app, auth, db, googleProvider, ADMIN_UID };
