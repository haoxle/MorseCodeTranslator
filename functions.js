const alphabet = {
  "a": ".- / ",
  "b": "-... / ",
  "c": "-.-. / ",
  "d": "-.. / ",
  "e": ". / ",
  "f": "..-. / ",
  "g": "--. / ",
  "h": ".... / ",
  "i": ".. / ",
  "j": ".--- / ",
  "k": "-.- / ",
  "l": ".-.. / ",
  "m": "-- / ",
  "n": "-. / ",
  "o": "--- / ",
  "p": ".--. / ",
  "q": "--.- / ",
  "r": ".-. / ",
  "s": "... / ",
  "t": "- / ",
  "u": "..- / ",
  "v": "...- / ",
  "w": ".-- / ",
  "x": "-..- / ",
  "y": "-.-- / ",
  "z": "--.. / ",
  "0": "----- / ",
  "1": ".---- / ",
  "2": "..-- / ",
  "3": "...-- / ",
  "4": "....- / ",
  "5": "----- / ",
  "6": "-.... / ",
  "7": "--.... / ",
  "8": "---.. / ",
  "9": "----. / ",
  ".": ".-.-.- / ",
  ",": "--..-- / ",
  ":": "---... / ",
  "'": ".----. / ",
  '"': ".----. / ",
  "-": "-....- / ",
  "@": ".--.-. / ",
  "=": "-...- / ",
  " ": "",
  "?": "..--.. / ",
  "/": "-..-. / ",
};
const translateEnglish = (e) => {
  const engrish = enterWord.value;
  const empty = checkIfEmpty(engrish);
  if (empty) {
    container.textContent = `Enter Something`;
  } else {
    container.textContent = "";
    const morse = engrish.toLowerCase().split("");
    morse.forEach((letter) => (container.textContent += alphabet[letter]));
  }
};

const checkHello = (text) => {
  let result = "";
  const morse = text.toLowerCase().split("");
  morse.forEach((letter) => (result += alphabet[letter]));
  return result.trim();
};

const checkIfEmpty = (text) => {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkIfEmpty, translateEnglish, checkHello };
