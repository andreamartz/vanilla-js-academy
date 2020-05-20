const text = document.querySelector("textarea");
const characterCount = document.querySelector("#character-count");

window.addEventListener("input", function (e) {
  const chars = Array.prototype.slice.call(text.value);
  const charsCount = chars.length;
  characterCount.textContent = charsCount;
});
