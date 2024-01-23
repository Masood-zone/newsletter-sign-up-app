document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email-input").value;
    if (validateEmail(emailInput)) {
      localStorage.setItem("email", emailInput);
      window.location.href = "/success-page.html";
      emailInput = "";
    } else {
      alert("Please enter a valid email!");
    }
  });

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}
