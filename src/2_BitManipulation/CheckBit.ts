export function checkBit(N: number, i: number) {
  return ((N >> i) & i) == 1 ? true : false;
}
