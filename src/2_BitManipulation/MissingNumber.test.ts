import { missingNumber, missingNumber2 } from "./MissingNumber";

test("missingNumber", () => {
  expect(missingNumber([1, 2, 3, 4, 6])).toBe(5);
});

test("missingNumber2", () => {
  expect(missingNumber2([1, 2, 3, 4, 6, 8])).toEqual(
    expect.arrayContaining([5, 7])
  );
});
