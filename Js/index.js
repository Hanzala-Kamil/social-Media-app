// document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value;
    const password = passwordInput.value;

    // const userData = {
    //   email: email,
    //   password: password,
    // };

    // localStorage.setItem("userData", JSON.stringify(userData));
    // alert('Data stored in local storage.');

    // emailInput.value = "";
    // passwordInput.value = "";

    let storeData = JSON.parse(localStorage.getItem("userData"));
    // if (storeData){
    //   alert('no account ')
    // }
if(email == storeData.email && password == storeData.password){
  location.href = "/landing.html"
}
else{
  alert("Your Password is not match")
}
  });
// });

// sing Up button
const signUpButton = document.querySelector(".login button");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = "/singup.html";
  }, 10);
  console.log("Sign-up button clicked!");
});

