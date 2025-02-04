export function isPowerOfTwo(N: number) {
  return (N & (N - 1)) == 0 ? true : false;
}
