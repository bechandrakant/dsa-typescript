export function findUnique(arr: number[]) {
  let unique: number = 0;
  arr.forEach((num) => {
    unique ^= num;
  });
  return unique;
}

export function findUnique2(arr: number[]) {
  let xor: number = 0;
  arr.forEach((num) => {
    xor ^= num;
  });

  // Find set bit in xor and divide array
  let position = -1;
  for (let i = 0; i <= 31; i++) {
    if (((xor >> i) & 1) == 1) {
      position = i;
      break;
    }
  }
  // divide array based on position bit
  let set = 0;
  let unset = 0;
  arr.forEach((num) => {
    if (num & (1 << position)) set ^= num;
    else unset ^= num;
  });

  return [set, unset];
}

export function findUnique3(arr: number[]) {
  let unique: number = 0;

  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] & (1 << i)) {
        count++;
      }
    }
    unique = unique | (count % 3 ? 1 << i : 0);
  }

  return unique;
}
