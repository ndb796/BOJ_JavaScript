let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

let answer = '';
for (let point of arr) {
  answer += point[0] + ' ' + point[1] + '\n';
}
console.log(answer);