window.onload = function () {
  let email = localStorage.getItem("email");
  let emailDisplay = document.getElementById("user-email");
  emailDisplay.textContent = email;
};
