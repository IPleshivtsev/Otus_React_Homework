import { runner } from "./runner";

test("runner: ( fib(77) + 32 * ( cos(45) - 2 ) / 10 ) * 5", () => {
  expect(runner("( fib(77) + 32 * ( cos(45) - 2 ) / 10 ) * 5")).toEqual(
    27639698504423764
  );
});

test("runner: cos(90) + 10 ! - fib(15) * ( 5 + 6 ** )", () => {
  expect(runner("cos(90) + 10 ! - fib(15) * ( 5 + 6 ** )")).toEqual(3603790);
});

test("runner: 1 * 32", () => {
  expect(runner("1 * 32")).toEqual(32);
});

test("runner: 2 * 32", () => {
  expect(runner("2 * 32")).toEqual(64);
});

test("runner: 2 * 2 * 3", () => {
  expect(runner("2 * 2 * 3")).toEqual(12);
});

test("runner: 2 * 2 + 3", () => {
  expect(runner("2 * 2 + 3")).toEqual(7);
});

test("runner: 2 + 2 * 3", () => {
  expect(runner("2 + 2 * 3")).toEqual(8);
});

test("runner: 20 + 1 * 10 - 5 * 3", () => {
  expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
});

test("runner: 20 - 10 * 10 / 5 - 3", () => {
  expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
});
