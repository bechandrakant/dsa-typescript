/**
 * Array A of size N. Find for how many elements,
 * there is a strictly smaller element and
 * a strictly greater element.
 * Constraints
 * 1 <= Size of Array <= 1e5;
 * 1 <= A[i] <= 1e6
 */

export function smallerAndGreater(arr: number[]) {
  let res: number[] = [];
  let min = arr.reduce((prev, curr) => Math.min(prev, curr), arr[0]);
  let max = arr.reduce((prev, curr) => Math.max(prev, curr), arr[0]);

  arr.forEach((ele) => {
    if (ele < max && ele > min) {
      res.push(ele);
    }
  });

  return res;
}
