document.addEventListener("DOMContentLoaded", () => {
    // Select elements from the DOM
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const form = document.getElementById("registration-form");

    // Name validation function
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }

    // Email validation function
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email.";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

    // Password validation function
    function validatePassword() {
        if (passwordInput.value.trim().length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long.";
            passwordError.style.display = "block";
            return false;
        } else {
            passwordError.style.display = "none";
            return true;
        }
    }

    // Real-time validation using event listeners
    nameInput.addEventListener("input", validateName);
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    passwordInput.addEventListener("blur", validatePassword);

    // Form submission event listener
    form.addEventListener("submit", (event) => {
        // Prevent submission if any validation fails
        if (!validateName() || !validateEmail() || !validatePassword()) {
            event.preventDefault(); // Stops form submission
        }
    });
});
