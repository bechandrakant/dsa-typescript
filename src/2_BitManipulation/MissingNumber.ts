export function missingNumber(arr: number[]) {
  let missingNum = 0;
  arr.forEach((ele) => (missingNum ^= ele));
  for (let i = 1; i <= arr.length + 1; i++) {
    missingNum ^= i;
  }
  return missingNum;
}

export function missingNumber2(arr: number[]) {
  let xor1 = 0;
  let xor2 = 0;
  arr.forEach((ele) => (xor1 ^= ele));
  for (let i = 1; i <= arr.length + 2; i++) {
    xor2 ^= i;
  }
  let xor = xor1 ^ xor2;

  // find set bit
  let position: number = -1;
  for (let i = 0; i < 32; i++) {
    if ((xor & (1 << i)) == 1 << i) {
      position = i;
      break;
    }
  }
  console.log(position, xor);

  // Divide based on set bit
  let set: number = 0;
  let unset: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & (1 << position)) unset ^= arr[i];
    else set ^= arr[i];
  }
  for (let i = 1; i <= arr.length + 2; i++) {
    if (i & (1 << position)) unset ^= i;
    else set ^= i;
  }

  return [set, unset];
}
