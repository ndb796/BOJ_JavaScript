let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let d = new Array(n + 1).fill(0);

for (let x = 2; x <= n; x++) {
  d[x] = d[x - 1]; // 1을 빼기
  if (x % 2 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)]); // 2로 나누기
  }
  if (x % 3 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)]); // 3으로 나누기
  }
  d[x]++;
}

console.log(d[n]);
