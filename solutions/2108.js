// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

// 산술 평균
let summary = arr.reduce((a, b) => a + b);
console.log(Math.round(summary / n));
// 중앙값
arr.sort((a, b) => a - b);
let median = arr[parseInt(n / 2)];
console.log(median)
// 각 원소마다 출현 빈도수 계산
let counter = new Map();
for (let i = 0; i < n; i++) {
  if (counter.has(arr[i])) {
    counter.set(arr[i], counter.get(arr[i]) + 1);
  }
  else {
    counter.set(arr[i], 1);
  }
}
// 가장 빈도수가 높은 원소들을 찾기
let maxValue = 0;
let maxElements = [];
for (let key of counter.keys()) {
  if (maxValue < counter.get(key)) {
    maxValue = counter.get(key);
    maxElements = [key];
  }
  else if (maxValue == counter.get(key)) {
    maxElements.push(key);
  }
}
// 가장 많이 나타나는 값 출력
// JavaScript의 Map은 기본적으로 입력된 순서대로 순회
if (maxElements.length >= 2) {
  console.log(maxElements[1]);
}
else {
  console.log(maxElements[0]);
}
// 범위 출력
console.log(arr[n - 1] - arr[0]);