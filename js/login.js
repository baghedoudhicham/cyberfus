document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate a successful login
            console.log('Login successful, redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        });
    }
});
