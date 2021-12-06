// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

arr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}