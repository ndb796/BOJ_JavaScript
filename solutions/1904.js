let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let d = new Array(n + 1).fill(0);

d[1] = 1;
d[2] = 2;

for (let x = 3; x <= n; x++) {
  d[x] += d[x - 1]; // 길이가 1만큼 작은 경우들에 [1] 타일 붙이기
  d[x] += d[x - 2]; // 길이가 2만큼 작은 경우들에 [00] 타일 붙이기
  d[x] %= 15746; // 값이 너무 큰 경우를 예방
}

console.log(d[n]);
