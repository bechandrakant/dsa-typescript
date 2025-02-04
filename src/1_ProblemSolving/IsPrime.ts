export function isPrime(n: number) {
  if (n < 2) return false;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
