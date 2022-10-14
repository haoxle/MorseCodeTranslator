const translateEnglish = (e) => {
  const engrish = enterWord.value;
  const empty = checkIfEmpty(engrish);
  if (empty) {
    container.textContent = `Enter Something`;
  } else {
    container.textContent = "";
    const morse = engrish.toLowerCase().split("");
    // .replace(/[^A-Za-z0-9]/gi, alphabet.key);
    for (letter in morse) {
      container.textContent += alphabet[letter];
    }
  }
};

const checkIfEmpty = (text) => {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
};

// module.exports = { checkIfEmpty, translateEnglish };
