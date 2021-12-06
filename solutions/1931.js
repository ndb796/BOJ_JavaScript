/*
  문제 요약: 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수 계산 (Activity Selection Problem)
  해결 방법: 1) 종료 시점 2) 시작 시점을 우선순위로 오름차순 정렬을 수행한 뒤에, 첫 번째 회의부터 시작해 겹치지 않게 최대한 많은 회의 선택
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 회의의 개수

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

// 1) 종료 시점 2) 시작 시점을 우선순위로 오름차순 정렬
arr.sort(function (a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1;
let cur = 0; // 첫 번째 회의부터 확인

for (let i = 1; i < n; i++) {
  // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);