export type ScalarOperationType = (first: number, second?: number) => number;

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

const exponentiation: ScalarOperationType = (
  first: number,
  second: number
 ): number => first ** second;

 const factorial: ScalarOperationType = (
   first:number
 ): number => first ? first * factorial(first - 1) : 1;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "!": factorial,
  "**": exponentiation,
  "^": exponentiation,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: { [key: string]: number } = {
  FIRST: 1,
  SECOND: 2,
};

const { FIRST, SECOND } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": FIRST,
  "**": FIRST,
  "^": FIRST,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
