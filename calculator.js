export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Nollalla ei voi jakaa");
  }

  return a / b;
}

export function isEven(number) {
  return number % 2 === 0;
}
