document.addEventListener("DOMContentLoaded", () => {
    // Form validation logic
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Login Form Validation
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");

            emailError.textContent = "";
            passwordError.textContent = "";

            if (!validateEmail(email.value)) {
                emailError.textContent = "Invalid email format";
                return;
            }

            if (password.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                return;
            }

            // Submit form if validation passes
            loginForm.submit();
        });
    }

    // Registration Form Validation
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");

            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            if (name.value.trim().length < 3) {
                nameError.textContent = "Name must be at least 3 characters";
                return;
            }

            if (!validateEmail(email.value)) {
                emailError.textContent = "Invalid email format";
                return;
            }

            if (password.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                return;
            }

            // Submit form if validation passes
            registerForm.submit();
        });
    }
});
