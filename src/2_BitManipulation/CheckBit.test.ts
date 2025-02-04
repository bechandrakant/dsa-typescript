import { checkBit } from "./CheckBit";

test("checkBit", () => {
  expect(checkBit(5, 2)).toBeFalsy();
  expect(checkBit(10, 3)).toBeTruthy();
});
