// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let k = Number(input[0].split(' ')[0]); // 가지고 있는 랜선의 개수(K)
let n = Number(input[0].split(' ')[1]); // 필요한 랜선의 개수(N)

let arr = []; // 각 랜선의 길이
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0;
  for (x of arr) { // 가지고 있는 각 랜선을 잘라서
    total += parseInt(x / mid); // 길이가 mid인 랜선을 몇 개 만들 수 있는지 계산
  }
  if (total < n) end = mid - 1; // 랜선의 개수가 부족한 경우 길이 줄이기(왼쪽 부분 탐색)
  else { // 랜선의 개수가 충분한 경우 길이 늘이기(오른쪽 부분 탐색)
    result = mid; // 최대 길이를 찾아야 하므로, result에 기록
    start = mid + 1;
  }
}
console.log(result);