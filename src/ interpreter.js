import { BINARY, LITERAL } from "./constants";

export function interpret(ast) {
  switch (ast.type) {
    case BINARY:
      return evalBinary(ast);
    case LITERAL:
      return ast.value;

    default:
      break;
  }
}

function evalBinary(exp) {
  switch (exp.operator?.type) {
    case "+":
      return interpret(exp.left) + interpret(exp.right);
  }
  throw new Error("Operator Error");
}
