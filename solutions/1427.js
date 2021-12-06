let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = '';
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + '';
  }
}
console.log(answer);