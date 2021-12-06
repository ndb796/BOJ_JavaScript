let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(Number);

data.sort((a, b) => a - b); // 오름차순 정렬

let target = 1;
for (x of data) {
  // 잴 수 없는 무게를 찾았을 때
  if (target < x) break; // 종료
  target += x;
}

// 잴 수 없는 무게 출력
console.log(target);