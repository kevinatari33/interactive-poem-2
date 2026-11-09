
const words = document.querySelectorAll(".word");
const message = document.querySelector("#message");

let changed = false;

function changePoem() {
  changed = !changed;

  words.forEach(function (word, index) {
    if (changed) {
      word.style.transform =
        "translateX(" + (index % 2 === 0 ? 20 : -20) + "px)";

      word.style.opacity = 0.7;
    } else {
      word.style.transform = "translateX(0)";
      word.style.opacity = 1;
    }
  });

  document.body.classList.toggle("changed", changed);

  if (changed) {
    message.textContent = "The river, wind, moon, and grass tell their story.";
  } else {
    message.textContent = "Nature always has another story to tell.";
  }
}

words.forEach(function (word) {
  word.addEventListener("click", changePoem);
});
