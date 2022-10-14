const enterWord = document.querySelector("#translateEnglish__input");
const translate = document.querySelector("#translate");
const reset = document.querySelector("#reset");
const container = document.querySelector(
  "#translateEnglish__translated__container"
);
reset.addEventListener("click", resetAll);
translate.addEventListener("click", translateEnglish);
