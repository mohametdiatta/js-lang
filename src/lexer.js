import { NUMBER } from "./constants";

export function lex(code) {
  let cursor = 0;
  let tokens = [];

  function number() {
    const start = cursor - 1;
    while (isDigit(code[cursor])) {
      cursor++;
    }
    if (code[cursor] === "." && isDigit(code[cursor + 1])) {
      cursor++;
      while (isDigit(code[cursor])) {
        cursor++;
      }
    }
    tokens.push({ type: NUMBER, value: parseFloat(code.slice(start, cursor)) });
  }
  while (cursor < code?.length) {
    const c = code[cursor++];

    switch (c) {
      case "":
      case "\n":
      case "\t":
      case "\0":
        break;
      case "+":
        tokens.push({ type: c });
        break;
      default:
        if (isDigit(c)) {
          number();
          break;
        }
        throw new Error("Unexpected token " + c);
    }
  }
  return tokens;
}

const isDigit = (c) => {
  return c >= "0" && c <= "9";
};
