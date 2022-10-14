import { checkIfEmpty, checkValidCharacters, checkReset } from "./functions.js";

const enterWord = document.querySelector("#translateEnglish__input");
const translate = document.querySelector("#translate");
const reset = document.querySelector("#reset");
const container = document.querySelector(
  "#translateEnglish__translated__container"
);

const translateEnglish = (e) => {
  const engrish = enterWord.value;
  const empty = checkIfEmpty(engrish);
  if (empty) {
    container.textContent = `Enter Something`;
  } else {
    const display = checkValidCharacters(engrish);
    container.textContent = display;
  }
};

const resetAll = (text) => {
  const isItEmpty = checkReset(text);
  if (text) {
    container.textContent = "";
    enterWord.value = "";
  }
};
reset.addEventListener("click", resetAll);
translate.addEventListener("click", translateEnglish);
