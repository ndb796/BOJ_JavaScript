/*
  문제 요약: 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 계산
  해결 방법: 처리 시간이 빠른 사람부터 처리할 때, 필요한 시간의 합이 최소가 됨
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 회의의 개수
let arr = input[1].split(' ').map(Number);

// 오름차순 정렬
arr.sort((a, b) => a - b);

let answer = 0;
let summary = 0;
for (let i = 0; i < n; i++) {
  summary += arr[i]; // i번째 사람이 기다린 총 시간
  answer += summary;
}

console.log(answer);