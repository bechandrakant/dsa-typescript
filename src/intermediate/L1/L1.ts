export function isPrime(n: number) {
  if (n < 2) return false;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

export function sqrt(n: number) {
  if (n < 0) return undefined;
  
  let start = 0;
  let end = n;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (mid * mid === n) {
      return mid; // Found the square root
    } else if (mid * mid < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  
}

export function isPerfectSquare(n: number) {
  if (n < 0) return false;

  let start = 0;
  let end = n;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (mid * mid === n) {
      return true; // Found the square root
    } else if (mid * mid < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

export function pattern(n: number) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let a = [];
    for (let j = 1; j <= n; j++) {
      a.push(j <= i + 1 ? j: 0);
    }
    res.push(a);
  }
  return res;
}