// const alphabet = {
//   "a": ".- / ",
//   "b": "-... / ",
//   "c": "-.-. / ",
//   "d": "-.. / ",
//   "e": ". / ",
//   "f": "..-. / ",
//   "g": "--. / ",
//   "h": ".... / ",
//   "i": ".. / ",
//   "j": ".--- / ",
//   "k": "-.- / ",
//   "l": ".-.. / ",
//   "m": "-- / ",
//   "n": "-. / ",
//   "o": "--- / ",
//   "p": ".--. / ",
//   "q": "--.- / ",
//   "r": ".-. / ",
//   "s": "... / ",
//   "t": "- / ",
//   "u": "..- / ",
//   "v": "...- / ",
//   "w": ".-- / ",
//   "x": "-..- / ",
//   "y": "-.-- / ",
//   "z": "--.. / ",
//   "0": "----- / ",
//   "1": ".---- / ",
//   "2": "..-- / ",
//   "3": "...-- / ",
//   "4": "....- / ",
//   "5": "----- / ",
//   "6": "-.... / ",
//   "7": "--.... / ",
//   "8": "---.. / ",
//   "9": "----. / ",
//   ".": ".-.-.- / ",
//   ",": "--..-- / ",
//   ":": "---... / ",
//   "'": ".----. / ",
//   '"': ".----. / ",
//   "-": "-....- / ",
//   "@": ".--.-. / ",
//   "=": "-...- / ",
//   " ": "",
//   "?": "..--.. / ",
//   "/": "-..-. / ",
// };

const enterWord = document.querySelector("#translateEnglish__input");
const translate = document.querySelector("#translate");
const reset = document.querySelector("#reset");
const container = document.querySelector(
  "#translateEnglish__translated__container"
);
reset.addEventListener("click", resetAll);
translate.addEventListener("click", translateEnglish);
