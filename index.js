// loan form element instance
const formElement = document.querySelector("#loanForm");

// creating randowm variables
const x = Math.floor(Math.random() * 10);
const y = Math.floor(Math.random() * 10);
const ans = x + y;

const num1 = document.querySelector(".firstNumber");
const num2 = document.querySelector(".secondNumber");
const res = document.querySelector("#answer");
num1.innerHTML = x; // replace x with num1
num2.innerHTML = y; // replace Y with num2

const validateLoanForm = (event) => {
  event.preventDefault();
  try {
    // the formData validation
    const formData = new FormData(formElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const pan = formData.get("pan");
    const loanAmount = formData.get("loanAmount");

    // storin the value in one variable
    const data = {
      name,
      email,
      pan,
      loanAmount,
    };

    // if user fails to validate the captcha
    try {
      if (res.value != ans) {
        alert("Invalid Catptcha");
        formElement.reset();
        window.location.reload();
      } else {
        console.log(data);
        alert("form submitted");
        window.location.replace("ThankYou.html");
        formElement.reset();
      }
    } catch (error) {
      alert(error);
    }
  } catch (error) {
    alert(error.message);
  }
};

formElement.addEventListener("submit", validateLoanForm);
