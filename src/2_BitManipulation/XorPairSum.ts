export function xorPairSum(arr: number[]) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let x = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] & (1 << i)) x++;
    }
    ans += x * (arr.length - x) * (1 << i);
  }
  return 2 * ans;
}
