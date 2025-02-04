import { addNumbers, addBinaryNumbers } from "./AddNumbers";

test("addNumbers", () => {
  expect(addNumbers("2", "3")).toBe("5");
  expect(addNumbers("5", "6")).toBe("11");
  expect(addNumbers("125", "6")).toBe("131");
  expect(addNumbers("999", "2")).toBe("1001");
  expect(addNumbers("9", "2998")).toBe("3007");
});

test("addBinaryNumbers", () => {
  expect(addBinaryNumbers("0", "1")).toBe("1");
  expect(addBinaryNumbers("1", "1")).toBe("10");
  expect(addBinaryNumbers("100", "11")).toBe("111");
  expect(addBinaryNumbers("101", "11")).toBe("1000");
  expect(addBinaryNumbers("1", "1000")).toBe("1001");
});
