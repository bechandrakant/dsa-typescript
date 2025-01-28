export function pattern(n: number) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let a = [];
    for (let j = 1; j <= n; j++) {
      a.push(j <= i + 1 ? j: 0);
    }
    res.push(a);
  }
  return res;
}