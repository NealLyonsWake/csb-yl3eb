// Declare all Input variables
const signUpButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const welcomeHeading = document.querySelector("#sign-up-heading");
const welcomeMessage = document.querySelector("#welcome-message");
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Declare form labels for user feedback prep
const labelName = document.querySelector("#label-name");
const labelEmail = document.querySelector("#label-email");
const labelPassword = document.querySelector("#label-password");

// Event for welcome message
signUpButton.addEventListener("click", signUp);

// Event for user feedback on entering form details
nameInput.addEventListener("input", validateLabelName);
emailInput.addEventListener("input", validateLabelEmail);
passwordInput.addEventListener("input", validateLabelPassword);

function validateLabelName() {
  if (nameInput.value.length <= 2) {
    labelName.textContent = "Name: min 3 characters!";
    labelName.style.color = "#ff00ff";
  } else {
    labelName.textContent = "Name:";
    labelName.style.color = "white";
  }
}

function validateLabelEmail() {
  if (emailInput.value.match(emailFormat)) {
    labelEmail.textContent = "Email:";
    labelEmail.style.color = "white";
  } else {
    labelEmail.textContent = "Email: invalid!";
    labelEmail.style.color = "#ff00ff";
  }
}

function validateLabelPassword() {
  if (passwordInput.value.length <= 11) {
    labelPassword.textContent = "Password: min 12 characters!";
    labelPassword.style.color = "#ff00ff";
  } else {
    labelPassword.textContent = "Password:";
    labelPassword.style.color = "white";
  }
}

// signUp Function invoked from click, this will invoke the constructor in the User class
function signUp() {
  // Check all fields have values
  // Includes email validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (
    nameInput.value.length > 2 &&
    emailInput.value.length > 0 &&
    emailInput.value.match(emailFormat) &&
    passwordInput.value.length > 11
  ) {
    let newUser = new User(
      nameInput.value,
      emailInput.value,
      passwordInput.value
    );
    newUser.registerConfirm();
  } else {
    alert("Please complete the form with valid details!");
  }
}

// User class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  registerConfirm() {
    welcomeHeading.textContent = `Welcome ${this.username}!`;
    welcomeMessage.textContent = `So glad you have registered ${this.email} with us! Now you can enjoy our TastyTV random recommendation on demand.`;
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
}
