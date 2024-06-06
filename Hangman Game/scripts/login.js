document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication (you can replace this with your own authentication logic)
    if (username === "the_krishpatel" && password === "12345678") {
      // Authentication successful, redirect to the Hangman game page
      window.location.href = "index.html";
    } else {
      // Authentication failed, display error message
      alert("Invalid username or password. Please try again.");
    }
  });
