import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

// Use the local emulator if running, otherwise connect to the real service
// The host and port must match what you configure in firebase.json
connectAuthEmulator(auth, "http://localhost:9099");

export { app, auth };
