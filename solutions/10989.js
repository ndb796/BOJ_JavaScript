/*
10989번 문제는 메모리 제한 때문에 node.js로 푸는 것이 사실상 불가능한 문제
*/
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = Array(10001).fill(0);

for (let i = 1; i <= n; i++) {
  let cur = Number(input[i]);
  cnt[cur] += 1;
}

let answer = '';
for (let i = 1; i <= 10000; i++) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + '\n';
  }
}
console.log(answer);