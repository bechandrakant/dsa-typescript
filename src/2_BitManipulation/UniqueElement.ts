export function findUnique(arr: number[]) {
  let unique: number = 0;
  arr.forEach((num) => {
    unique ^= num;
  });
  return unique;
}
