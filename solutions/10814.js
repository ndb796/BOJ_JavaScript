let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].split(' ')[1];
  arr.push([age, name]);
}

// Node.js의 정렬은 기본적으로 stable
arr.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
});

let answer = '';
for (let x of arr) {
  answer += x[0] + ' ' + x[1] + '\n';
}
console.log(answer);