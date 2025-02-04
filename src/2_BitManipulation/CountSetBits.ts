export function countSetBits(N: number) {
  let count = 0;
  while (N > 0) {
    if ((N & 1) == 1) count++;
    N = N >> 1;
  }
  return count;
}
