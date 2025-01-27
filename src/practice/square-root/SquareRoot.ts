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