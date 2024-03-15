document
  .getElementById("mailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    console.log("Correo electrónico ingresado: ", email);
  });
document
  .getElementById("mailForm2")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("mail2").value;
    console.log("Correo electrónico ingresado: ", email);
  });
