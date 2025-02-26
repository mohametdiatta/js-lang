import { BINARY, LITERAL, NUMBER } from "./constants";

/**
 *
 * @param {{type:string,value?:number}[]} tokens
 */
export function parse(tokens) {
  let cursor = 0;

  function expression() {
    let left = literalExpression();
    while (tokens[cursor]?.type === "+") {
      left = {
        type: BINARY,
        left,
        operator: tokens[cursor++],
        right: literalExpression(),
      };
    }
    return left;
  }

  function literalExpression() {
    const token = tokens[cursor++];
    if (token?.type === NUMBER) {
      return {
        type: LITERAL,
        value: token.value,
      };
    }
    throw new Error(" UnExpected token" + JSON.stringify(token));
  }

  return expression();
}
