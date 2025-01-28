import { pattern } from "./Pattern1"

test("Pattern", () => {
  expect(pattern(3)).toStrictEqual(
    [ 
      [1, 0, 0],
      [1, 2, 0],
      [1, 2, 3]
    ]
  );
  
  expect(pattern(4)).toStrictEqual(
    [ 
      [1, 0, 0, 0],
      [1, 2, 0, 0],
      [1, 2, 3, 0],
      [1, 2, 3, 4]
    ]
  );
})