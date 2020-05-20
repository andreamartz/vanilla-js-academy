const text = document.querySelector("textarea");
const characterCount = document.querySelector("#character-count");

window.addEventListener("click", function (e) {
  console.log(e);
  console.log(characterCount.textContent);
});
