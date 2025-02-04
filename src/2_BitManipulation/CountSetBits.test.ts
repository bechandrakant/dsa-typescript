import { countSetBits } from "./CountSetBits";

test("countSetBits", () => {
  expect(countSetBits(2)).toBe(1);
  expect(countSetBits(3)).toBe(2);
  expect(countSetBits(15)).toBe(4);
});
