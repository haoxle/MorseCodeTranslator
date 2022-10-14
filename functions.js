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
  " ": "| ",
  "?": "..--.. / ",
  "/": "-..-. / ",
};

export const checkValidCharacters = (text) => {
  let result = "";
  const morse = text.toLowerCase().split("");
  morse.forEach((letter) => {
    if (alphabet[letter]) {
      result += alphabet[letter];
    }
  });
  return result.trim();
};

export const checkIfEmpty = (text) => {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const checkReset = (text) => {
  if (text.length > 0) {
    return true;
  } else {
    return false;
  }
};
