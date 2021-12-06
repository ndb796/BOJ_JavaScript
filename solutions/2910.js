let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0].split(' ')[0]);
let c = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

// 각 원소마다 출현 빈도수 기록
let counter = new Map();
for (let i = 0; i < n; i++) {
  if (counter.has(arr[i])) counter.set(arr[i], counter.get(arr[i]) + 1);
  else counter.set(arr[i], 1);
}

// JavaScript의 Map은 삽입 순서를 보존
let data = counter.entries();
// 빈도수를 기준으로 내림차순 정렬 (Node.js의 정렬은 stable)
let sorted = [ ... data].sort((a, b) => b[1] - a[1]);
let answer = '';
for (let i = 0; i < sorted.length; i++) // 각 원소에 대하여
  for (let j = 0; j < sorted[i][1]; j++) // 빈도수만큼 출력
    answer += sorted[i][0] + ' ';
console.log(answer);