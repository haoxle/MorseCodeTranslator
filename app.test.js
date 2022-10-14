import { checkIfEmpty, checkHello } from "./functions";

describe("translateWord", () => {
  it("should translate hello", () => {
    const result = checkHello("hello");
    expect(result).toBe(".... / . / .-.. / .-.. / --- /");
  });

  it("should translate hello how are you", () => {
    const result = checkHello("hello how are you");
    expect(result).toBe(
      ".... / . / .-.. / .-.. / --- / .... / --- / .-- / .- / .-. / . / -.-- / --- / ..- /"
    );
  });
});

describe("translateWord Capital", () => {
  it("should translate HELLO", () => {
    const result = checkHello("HELLO");
    expect(result).toBe(".... / . / .-.. / .-.. / --- /");
  });
});

describe("does not accept non valid characters", () => {
  it("should return unavailable combination", () => {
    const result = translateEnglish("%$#@!");
    expect(result).toBe("unavailable combination");
  });
});

describe("if string is empty", () => {
  it("should return Enter Word/s", () => {
    const result = checkIfEmpty("");
    expect(result).toBe(true);
  });
});
