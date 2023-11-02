document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var output = document.getElementById("output");
    output.innerHTML = "Name: " + name + "<br>Email: " + email;
  });
