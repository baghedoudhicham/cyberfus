import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcr3cXQhlpqJcYISLd-VvUkGzeUgsod2w",
  authDomain: "cyberfusco.firebaseapp.com",
  projectId: "cyberfusco",
  storageBucket: "cyberfusco.appspot.com",
  messagingSenderId: "83125811278",
  appId: "1:83125811278:web:492918a7285aca2c612b1f",
  measurementId: "G-ZMMHDGLTBP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Use the local emulator if running, otherwise connect to the real service
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, 'localhost', 8080);

export { app, auth, db };
