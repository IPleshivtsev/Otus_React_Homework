import { parser } from "./parser";

test("parser: ( fib(5) + 6 * ( 43 + cos(90) ) ) + 5", () => {
  expect(parser("( fib(5) + 6 * ( 43 + cos(90) ) ) + 5")).toEqual([
    "(",
    "fib(5)",
    "+",
    6,
    "*",
    "(",
    43,
    "+",
    "cos(90)",
    ")",
    ")",
    "+",
    5,
  ]);
});

test("parser: cos ( 90 )", () => {
  expect(() => parser("cos ( 90 )")).toThrow(TypeError("Unexpected string"));
});

test("parser: cos(90) + 5", () => {
  expect(parser("cos(90) + 5")).toEqual(["cos(90)", "+", 5]);
});

test("parser: 1 + 32", () => {
  expect(parser("1 + 32")).toEqual([1, "+", 32]);
});

test("parser: 11 + 3 * 22", () => {
  expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
});

test("parser: 1 + 32 - 2 + 2", () => {
  expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
});

test("parser: 1 + + 33 - 2", () => {
  expect(() => parser("1 + + 33 - 2")).toThrow(TypeError("Unexpected string"));
});

test("parser: 1! 33 - 2", () => {
  expect(() => parser("1! 33 - 2")).toThrow(TypeError("Unexpected string"));
});
