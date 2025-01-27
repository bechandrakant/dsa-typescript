import isPrime from "./IsPrime"

test("isPrime function", () => {
  expect(isPrime(1)).toBeFalsy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(10)).toBeFalsy();
})