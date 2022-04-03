import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const { FUNC, FIRST, SECOND, THIRD } = mathPriorities;
let prevItem;
let item;
let nextItem;

export const funcCalc = (stack: ParsedLineType): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    item = stack[key];

    const itemSplit = String(item).split("(");
    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[itemSplit[0]] === FUNC &&
      (itemSplit.length === 1 ||
        (itemSplit.length > 1 &&
          ["cos", "sin", "tan", "fib"].includes(itemSplit[0])))
    ) {
      result = [
        ...result,
        mathOperators[itemSplit[0]](Number(itemSplit[1].split(")")[0]), 0),
      ];
    } else {
      result.push(item);
    }
  }

  return result;
};

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    if (["**", "!"].includes(String(stack[key])) && key === stack.length - 1) {
      prevItem = result[result.length - 1];
      item = stack[key];
      nextItem = "2";
    } else {
      prevItem = result[result.length - 2];
      item = result[result.length - 1];
      nextItem = stack[key];
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      result = [
        ...result.slice(0, ["**"].includes(String(stack[key])) ? -1 : -2),
        mathOperators[item](
          Number(prevItem),
          isNumber(String(nextItem)) ? Number(nextItem) : 2
        ),
      ];
      if (item !== "^" && key !== stack.length - 1) {
        result.push(nextItem);
      }
    } else {
      result.push(nextItem);
    }
  }

  return result;
};

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    prevItem = result[result.length - 2];
    item = result[result.length - 1];
    nextItem = stack[key];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
  }

  return result;
};

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  let result = 0;
  for (let key = 0; key < stack.length; key++) {
    if (key === 0) {
      result = Number(stack[key]);
    }

    prevItem = result;
    item = stack[key - 1];
    nextItem = stack[key];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(prevItem), Number(nextItem));
    }
  }
  return [result];
};
