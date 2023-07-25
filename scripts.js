const createAccountBtn = document.querySelector('#create-account-btn');
const email = document.querySelector('#user-email');
const password = document.querySelector('#user-pass');
const confirmPassword = document.querySelector('#user-pass-confirm');
const passwordValidationDisplay = document.querySelector('#password-validation-display');
const emailValidationDisplay = document.querySelector('#email-validation-display');
const openLogin = document.querySelector('#open-login');
const closeLogin = document.querySelector('#close-login');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');

createAccountBtn.addEventListener('click', function() {
    passwordValidationDisplay.innerText = "";
    emailValidationDisplay.innerText = "";

    if (password.value === confirmPassword.value) {
        if (password.validity.valid && confirmPassword.validity.valid && email.validity.valid) {
            email.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";
            password.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";
            confirmPassword.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";
            passwordValidationDisplay.style.color = "green";
            passwordValidationDisplay.innerText = "Success!";
        } else {
            if (password.validity.valid && confirmPassword.validity.valid) {
                password.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";
                confirmPassword.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";

                emailValidationDisplay.style.color = "red";
                email.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                emailValidationDisplay.innerText = "Please input a valid email";
            } else if (email.validity.valid) {
                email.style.boxShadow = "inset 0 0 5px var(--valid-clr-60)";

                password.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                confirmPassword.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                passwordValidationDisplay.style.color = "red";
                passwordValidationDisplay.innerText = "Please input a valid password (8-40 characters)";
            } else {
                email.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                emailValidationDisplay.style.color = "red";
                emailValidationDisplay.innerText = "Please input a valid email";

                password.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                confirmPassword.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
                passwordValidationDisplay.style.color = "red";
                passwordValidationDisplay.innerText = "Please input a valid password (8-40 characters)";
            }
        }
    } else {
        if (!email.validity.valid) {
            email.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
            emailValidationDisplay.style.color = "red";
            emailValidationDisplay.innerText = "Please input a valid email";
        }
        password.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
        confirmPassword.style.boxShadow = "inset 0 0 5px var(--accent-clr-60)";
        password.value = "";
        confirmPassword.value = "";
        passwordValidationDisplay.style.color = "red";
        passwordValidationDisplay.innerText = "Passwords must match!";
    }
});

openLogin.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("open-login clicked!");
    modalContainer.style.display = "flex";
    modalContainer.style.alignItems = "center";
    modalContainer.style.justifyContent = "center";
    modalContent.classList.toggle("fade");
});


closeLogin.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("close-login clicked!");
    modalContainer.style.display = "none";
    modalContent.classList.toggle("fade");
});

