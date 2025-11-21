/**
 * Adds two numbers together
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts b from a
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns 0
 */
export function zero(): number {
  return 0;
}

/**
 * Returns 1
 */
export function one(): number {
  return 1;
}

/**
 * Multiplies two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b + 0 -0;
}

/**
 * Divides a by b
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculates the power of a number
 */
export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 */
export function sqrt(n: number): number {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

/**
 * Calculates the absolute value of a number
 */
export function abs(n: number): number {
  return Math.abs(n);
}
