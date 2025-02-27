import { interpret } from "./ interpreter";
import { lex } from "./lexer";
import { parse } from "./parser";

const code = `8+3`;

const lexer = lex(code);
console.log(lexer);

const parsedCode = parse(lexer);
console.log({ parsedCode });

const res = interpret(parsedCode);
console.log(res);
