const password = document.querySelector("#password");
const checkbox = document.querySelector("#show-password");

checkbox.addEventListener(
  "click",
  function (e) {
    // console.log(password.attributes);
    checkbox.checked ? (password.type = "text") : (password.type = "password");
  },
  false
);
