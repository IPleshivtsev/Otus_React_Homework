import { ParsedLineType, parser } from "./parser";

import {
  funcCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

const calculate = (stack: ParsedLineType): number => {
  const functions = [
    funcCalc,
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc,
  ];

  for (const func of functions) {
    stack = func(stack);

    if (stack.length === 1) {
      return Number(stack[0]);
    }
  }
  return 0;
};

const checkParentheses = (stack: ParsedLineType): number => {
  let endParenthesisIndex;
  let expression;
  while (stack.includes("(") && stack.includes(")")) {
    endParenthesisIndex = stack.indexOf(")");

    for (let i = endParenthesisIndex - 1; i >= 0; i--) {
      if (stack[i] === "(") {
        expression = [];
        for (let j = i + 1; j < endParenthesisIndex; j++) {
          expression.push(stack[j]);
        }
        stack.splice(i, endParenthesisIndex + 1 - i, calculate(expression));
        break;
      }
    }
  }
  return calculate(stack);
};

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  return checkParentheses(stack);
};
