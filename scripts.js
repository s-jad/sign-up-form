const createAccountBtn = document.querySelector('#create-account-btn');
const email = document.querySelector('#user-email');
const password = document.querySelector('#user-pass');
const confirmPassword = document.querySelector('#user-pass-confirm');
const passwordValidationDisplay = document.querySelector('#password-validation-display');
const emailValidationDisplay = document.querySelector('#email-validation-display');

createAccountBtn.addEventListener('click', function() {
    passwordValidationDisplay.innerText = "";
    emailValidationDisplay.innerText = "";

    if (password.value === confirmPassword.value) {
        if (password.validity.valid && confirmPassword.validity.valid && email.validity.valid) {
            passwordValidationDisplay.style.color = "green";
            passwordValidationDisplay.innerText = "Success!";
        } else {
            if (password.validity.valid && confirmPassword.validity.valid) {
                emailValidationDisplay.style.color = "red";
                emailValidationDisplay.innerText = "Please input a valid email";
            } else if (email.validity.valid) {
                passwordValidationDisplay.style.color = "red";
                passwordValidationDisplay.innerText = "Please input a valid password (8-40 characters)";
            } else {
                emailValidationDisplay.style.color = "red";
                emailValidationDisplay.innerText = "Please input a valid email";
                passwordValidationDisplay.style.color = "red";
                passwordValidationDisplay.innerText = "Please input a valid password (8-40 characters)";
            }
        }
    } else {
        if (!email.validity.valid) {
            emailValidationDisplay.style.color = "red";
            emailValidationDisplay.innerText = "Please input a valid email";
        }
        passwordValidationDisplay.style.color = "red";
        passwordValidationDisplay.innerText = "Passwords must match!";
    }
});


