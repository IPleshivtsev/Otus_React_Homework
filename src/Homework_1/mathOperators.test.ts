import {
  fib,
  sin,
  cos,
  tan,
  factorial,
  exponentiation,
  mul,
  div,
  add,
  minus,
} from "./mathOperators";
test("fib(50) to equal 12586269025", () => {
  expect(fib(50)).toBe(12586269025);
});

test("fib(10) to equal 55", () => {
  expect(fib(10)).toBe(55);
});

test("sin(90) to equal 1", () => {
  expect(sin(90)).toBe(1);
});

test("sin(0) to equal 0", () => {
  expect(sin(0)).toBe(0);
});

test("cos(90) to equal 0", () => {
  expect(cos(90)).toBe(0);
});

test("cos(0) to equal 1", () => {
  expect(cos(0)).toBe(1);
});

test("tan(135) to equal -1", () => {
  expect(tan(135)).toBe(-1);
});

test("tan(45) to equal 1", () => {
  expect(tan(45)).toBe(1);
});

test("factorial 9 ! to equal 362880", () => {
  expect(factorial(9)).toBe(362880);
});

test("factorial 5 ! to equal 120", () => {
  expect(factorial(5)).toBe(120);
});

test("exponentiation 7 ** to equal 49", () => {
  expect(exponentiation(7, 2)).toBe(49);
});

test("exponentiation 5 ** to equal 25", () => {
  expect(exponentiation(5, 2)).toBe(25);
});

test("exponentiation 2 ^ 7 to equal 128", () => {
  expect(exponentiation(2, 7)).toBe(128);
});

test("exponentiation 3 ^ 5 to equal 243", () => {
  expect(exponentiation(3, 5)).toBe(243);
});

test("mul 1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul 2 * 2 to equal 4", () => {
  expect(mul(2, 2)).toBe(4);
});

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("div 4 / 2 to equal 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("add 4 + 2 to equal 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("minus 4 - 2 to equal 2", () => {
  expect(minus(4, 2)).toBe(2);
});
