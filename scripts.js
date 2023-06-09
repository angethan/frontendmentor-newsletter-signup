//FORM WRAPPER
const formWrapper = document.querySelector(".form-wrapper");
const successWrapper = document.querySelector("#successWrapper");
const emailInput = document.querySelector("#emailInput");
const submitButton = document.querySelector("#submitButton");
const dismissButton = document.querySelector("#dismissButton");
const errorMessage = document.querySelector("#errorMessage");

function validateEmail() {
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailValid = emailPattern.test(emailValue);

  if (!emailValid) {
    errorMessage.style.display = "block";
    emailInput.classList.add("border", "border-danger", "text-danger");
    emailInput.style.backgroundColor = "var(--lightDanger)";
  } else {
    formWrapper.style.display = "none";
    successWrapper.classList.add("success-wrapper");
    successWrapper.classList.remove("success-wrapper-none");
  }
}

submitButton.addEventListener("click", validateEmail);
dismissButton.addEventListener("click", () => {
  successWrapper.classList.add("success-wrapper-none");
  successWrapper.classList.remove("success-wrapper");
  formWrapper.style.display = "flex";
  emailInput.classList.remove("border", "border-danger", "text-danger");
  emailInput.style.backgroundColor = "var(--white)";
  emailInput.value = "";
  errorMessage.style.display = none;
});
