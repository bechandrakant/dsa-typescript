/**
 * rray of distinct integers A, find and return all elements
 * which have at-least two greater elements than themselves.
 * Constraints
 * 3 <= |A| <= 10^5
 * -10^9 <= A[i] <= 10^9
 */

export function twoGreaterElement(arr: number[]) {
  let res: number[] = [];
  let max = arr.reduce((prev, curr) => Math.max(prev, curr), arr[0]);
  let max2 = arr.reduce(
    (prev, curr) => (max === curr ? prev : Math.max(prev, curr)),
    arr[0]
  );

  arr.forEach((ele) => {
    if (ele < max && ele < max2) {
      res.push(ele);
    }
  });

  return res;
}
