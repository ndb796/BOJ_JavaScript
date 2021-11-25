// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);
let value = first * second * third + ""; // 세 수를 곱하여 문자열로 변환

let cnt = new Array(10).fill(0); // 값이 0인 10개의 원소를 포함하는 배열 생성

for (let i = 0; i < value.length; i++) {
  cnt[Number(value[i])]++;
}
for (let i = 0; i < 10; i++) {
  console.log(cnt[i]);
}