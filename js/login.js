import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showSignin = document.getElementById('show-signin');
    const signinContainer = document.getElementById('sign-in-container');
    const signupContainer = document.getElementById('sign-up-container');

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        signinContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    showSignin.addEventListener('click', (e) => {
        e.preventDefault();
        signupContainer.style.display = 'none';
        signinContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                console.error('Error signing in:', error);
                alert(`Error: ${error.message}`);
            });
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed up:', userCredential.user);
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                alert(`Error: ${error.message}`);
            });
    });
});
