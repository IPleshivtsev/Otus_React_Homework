import {
  funcCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

test("funcCalc: [fib(77)]", () => {
  expect(funcCalc(["fib(77)"])).toEqual([5527939700884757]);
});

test("funcCalc: [sin(90)]", () => {
  expect(funcCalc(["sin(90)"])).toEqual([1]);
});

test("funcCalc: [cos(0)]", () => {
  expect(funcCalc(["cos(0)"])).toEqual([1]);
});

test("funcCalc: [tan(45)]", () => {
  expect(funcCalc(["tan(45)"])).toEqual([1]);
});

test("firstPrioritiesCalc: [10, ! ]", () => {
  expect(firstPrioritiesCalc([10, "!"])).toEqual([3628800]);
});

test("firstPrioritiesCalc: [3, ** ]", () => {
  expect(firstPrioritiesCalc([3, "**"])).toEqual([9]);
});

test("firstPrioritiesCalc: [2, ^ 5]", () => {
  expect(firstPrioritiesCalc([2, "^", 5])).toEqual([32]);
});

test("secondPrioritiesCalc: [1, * 32]", () => {
  expect(secondPrioritiesCalc([1, "*", 32])).toEqual([32]);
});

test("secondPrioritiesCalc: [32, / 32]", () => {
  expect(secondPrioritiesCalc([32, "/", 32])).toEqual([1]);
});

test("secondPrioritiesCalc: [32, + 32]", () => {
  expect(secondPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
});

test("thirdPrioritiesCalc: [32, + 32]", () => {
  expect(thirdPrioritiesCalc([32, "+", 32])).toEqual([64]);
});

test("thirdPrioritiesCalc: [32, - 32]", () => {
  expect(thirdPrioritiesCalc([32, "-", 32])).toEqual([0]);
});
