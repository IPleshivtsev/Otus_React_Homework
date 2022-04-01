import { isNumber } from "./helpers";
import {
  mathOperators,
  mathOperatorsPriorities,
  mathPriorities,
} from "./mathOperators";

const { FUNC, FIRST, SECOND, THIRD } = mathPriorities;

export type ParsedLineType = Array<number | string>;

export const parser = (line: string): ParsedLineType | null => {
  const result = [];
  const stack = line.split(" ");

  for (let key = 0; key < stack.length; key++) {
    const prevItem = stack[key - 1];
    const item = stack[key];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidParenthesisPush = !isNumber(item) && ["(", ")"].includes(item);
    const isValidOperatorPush =
      (isNumber(prevItem) ||
        (!isNumber(prevItem) &&
          ((String(prevItem).split("(").length > 1 &&
            mathOperators.hasOwnProperty(String(prevItem).split("(")[0])) ||
            mathOperators.hasOwnProperty(String(prevItem)) ||
            ["(", ")"].includes(prevItem))) ||
        prevItem === undefined) &&
      !isNumber(item) &&
      ((String(item).split("(").length > 1 &&
        ["cos", "sin", "tan", "fib"].includes(String(item).split("(")[0])) ||
        (String(item).split("(").length === 1 &&
          !["cos", "sin", "tan", "fib"].includes(
            String(item).split("(")[0]
          ))) &&
      mathOperators.hasOwnProperty(String(item).split("(")[0]) &&
      (prevItem === undefined ||
        (!isNumber(prevItem) && isNumber(item)) ||
        (isNumber(prevItem) && !isNumber(item)) ||
        (!isNumber(prevItem) && ["(", ")"].includes(String(item))) ||
        (!isNumber(item) && ["(", ")"].includes(String(prevItem))) ||
        (mathOperatorsPriorities[String(prevItem).split("(")[0]] === FUNC &&
          [SECOND, THIRD].includes(
            mathOperatorsPriorities[String(item).split("(")[0]]
          )) ||
        (mathOperatorsPriorities[String(item).split("(")[0]] === FUNC &&
          [SECOND, THIRD].includes(
            mathOperatorsPriorities[String(prevItem).split("(")[0]]
          )) ||
        (["!", "**"].includes(String(item).split("(")[0]) &&
          mathOperatorsPriorities[String(item).split("(")[0]] === FIRST &&
          [SECOND, THIRD].includes(
            mathOperatorsPriorities[String(prevItem).split("(")[0]]
          )) ||
        (["!", "**"].includes(String(prevItem).split("(")[0]) &&
          mathOperatorsPriorities[String(prevItem).split("(")[0]] === FIRST &&
          [SECOND, THIRD].includes(
            mathOperatorsPriorities[String(item).split("(")[0]]
          )));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush || isValidParenthesisPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
  }
  return result;
};
