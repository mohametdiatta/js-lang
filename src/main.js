import { lex } from "./lexer";
import { parse } from "./parser";

const code = `93+208.9+12`;

const lexer = lex(code);
console.log(lexer);

const parsedCode = parse(lexer);
console.log(parsedCode);
