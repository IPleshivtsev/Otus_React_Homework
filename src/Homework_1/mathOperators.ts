export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const exponentiation: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const factorial = (num: number): number =>
  num ? num * factorial(num - 1) : 1;

export const sin = (degree: number): number =>
  Number(Math.sin((degree * Math.PI) / 180.0).toFixed(3));

export const cos = (degree: number): number =>
  Number(Math.cos((degree * Math.PI) / 180.0).toFixed(3));

export const tan = (degree: number): number =>
  Number(Math.tan((degree * Math.PI) / 180.0).toFixed(3));

export const fib = (num: number): number => {
  if (num <= 1) {
    return num;
  }

  let oldNextNum = 0;
  let prevNum = 0;
  let nextNum = 1;
  for (let i = 1; i < num; i++) {
    oldNextNum = nextNum;
    nextNum += prevNum;
    prevNum = oldNextNum;
  }
  return nextNum;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  fib: fib,
  sin: sin,
  cos: cos,
  tan: tan,
  "!": factorial,
  "**": exponentiation,
  "^": exponentiation,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: { [key: string]: number } = {
  FUNC: 1,
  FIRST: 2,
  SECOND: 3,
  THIRD: 4,
};

const { FUNC, FIRST, SECOND, THIRD } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  fib: FUNC,
  sin: FUNC,
  cos: FUNC,
  tan: FUNC,
  "!": FIRST,
  "**": FIRST,
  "^": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};
