// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 나무의 수(N)
let m = Number(input[0].split(' ')[1]); // 가져갈 나무의 길이(M)

let arr = input[1].split(' ').map(Number); // 각 나무의 높이

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0;
  for (x of arr) {
    if (x > mid) total += x - mid; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
  }
  if (total < m) end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기(왼쪽 부분 탐색)
  else { // 나무의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
    result = mid; // 최대한 덜 잘랐을 때가 정답이므로, result에 기록
    start = mid + 1;
  }
}
console.log(result);