// getting the random 4 values
const val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
// getting instance of otp input field
const validateOtp = document.querySelector(".otpVerify");

// otp form instance
const form = document.querySelector("#otpForm");

// counter variable for upto 3 attempts
let counter = 3;

// OTP form validatoin function
const validateOTPForm = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const otpValue = formData.get("otp");

  if (otpValue == val) {
    alert("Your Are Verified Now!");
    form.reset();
    window.location.href = "http://pixel6.co/";
  } else {
    alert("Invalid OTP Entered");
    counter = counter - 1;
    if (counter == 0) {
      alert("Failed to Verify OTP");
      window.location.replace("NotFound.html");
    }
    // form.reset();
    // window.location.reload();
  }
};
// event listener for the validatinForm
form.addEventListener("submit", validateOTPForm);
