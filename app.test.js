import { checkIfEmpty, checkValidCharacters } from "./functions";

describe("translateWord", () => {
  it("should translate hello", () => {
    const result = checkValidCharacters("hello");
    expect(result).toBe(".... / . / .-.. / .-.. / --- /");
  });

  it("should translate hello how are you", () => {
    const result = checkValidCharacters("hello how are you");
    expect(result).toBe(
      ".... / . / .-.. / .-.. / --- / | .... / --- / .-- / | .- / .-. / . / | -.-- / --- / ..- /"
    );
  });
});

describe("translateWord Capital", () => {
  it("should translate HELLO", () => {
    const result = checkValidCharacters("HELLO");
    expect(result).toBe(".... / . / .-.. / .-.. / --- /");
  });
});

describe("does not accept non valid characters", () => {
  it("should return unavailable combination", () => {
    const result = checkValidCharacters("hi!");
    expect(result).toBe(".... / .. /");
  });
});

describe("if string is empty", () => {
  it("should return Enter Word/s", () => {
    const result = checkIfEmpty("");
    expect(result).toBe(true);
  });
});
