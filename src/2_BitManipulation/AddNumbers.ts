export function addNumbers(num1: string, num2: string) {
  if (num1.length !== num2.length) {
    if (num2.length > num1.length) {
      let zeroToAdd = num2.length - num1.length;
      for (let i = 0; i < zeroToAdd; i++) {
        num1 = "0" + num1;
      }
    } else {
      let zeroToAdd = num1.length - num2.length;
      for (let i = 0; i < zeroToAdd; i++) {
        num2 = "0" + num2;
      }
    }
  }

  let result: string = "";
  let sum: number = 0;
  let carry: number = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    sum = (carry + +num1[i] + +num2[i]) % 10;
    carry = Math.floor((carry + +num1[i] + +num2[i]) / 10);
    result = sum + result;
  }

  return carry ? carry + result : result;
}

export function addBinaryNumbers(num1: string, num2: string) {
  if (num1.length !== num2.length) {
    if (num2.length > num1.length) {
      let zeroToAdd = num2.length - num1.length;
      for (let i = 0; i < zeroToAdd; i++) {
        num1 = "0" + num1;
      }
    } else {
      let zeroToAdd = num1.length - num2.length;
      for (let i = 0; i < zeroToAdd; i++) {
        num2 = "0" + num2;
      }
    }
  }

  let result: string = "";
  let sum: number = 0;
  let carry: number = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    sum = (carry + +num1[i] + +num2[i]) % 2;
    carry = Math.floor((carry + +num1[i] + +num2[i]) / 2);
    result = sum + result;
  }

  return carry ? carry + result : result;
}
