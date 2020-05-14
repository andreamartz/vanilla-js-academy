// passwords will return a node list (i.e., NOT an array)
const passwords = document.querySelectorAll("[type = 'password']");
const checkbox = document.querySelector("#show-passwords");

// convert the passwords NodeList into an array
const passwordsArr = Array.prototype.slice.call(passwords);

checkbox.addEventListener("click", function (e) {
  if (checkbox.checked) {
    passwordsArr.forEach(function (password) {
      password.type = "text";
    });
  } else {
    passwordsArr.forEach(function (password) {
      password.type = "password";
    });
  }
});
