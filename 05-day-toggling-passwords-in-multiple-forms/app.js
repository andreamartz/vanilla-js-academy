// Use event delegation to listen for all clicks in the document
window.addEventListener("click", function (e) {
  if (!e.target.matches("[data-pw-toggle]")) return;
  // Get a comma-separated list of the ids of the passwords to toggle.
  const passwordsToToggle = document.querySelectorAll(
    e.target.getAttribute("data-pw-toggle")
  );
  console.log(passwordsToToggle);
  // Put that list of passwords to toggle into an array.
  const passwordsArr = Array.prototype.slice.call(passwordsToToggle);
  console.log(passwordsArr);
  passwordsArr.forEach(function (password) {
    if (e.target.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
});
