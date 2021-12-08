// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 집의 개수(N)
let c = Number(input[0].split(' ')[1]); // 공유기의 개수(C)

let arr = []; // 전체 집의 좌표 정보를 입력받기
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b); // 이진 탐색 수행을 위해 오름차순 정렬 수행

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1; // 가능한 최소 거리 차이(minimum gap)
let end = arr[n - 1] - arr[0]; // 가능한 최대 거리 차이(maximum gap)

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  // 현재의 중간점(mid)은 가장 인접한 두 공유기 사이의 거리(gap)를 의미
  let mid = parseInt((start + end) / 2);
  // 첫째 집에는 무조건 공유기를 설치한다고 가정
  let value = arr[0];
  let cnt = 1;
  // 현재의 mid 값을 이용해 공유기를 설치
  for (let i = 1; i < n; i++) {
    if (arr[i] >= value + mid) {
      value = arr[i];
      cnt++;
    }
  }
  if (cnt >= c) { // C개 이상의 공유기를 설치할 수 있는 경우, 거리를 증가시키기
    start = mid + 1;
    result = mid; // 최적의 결과를 저장
  }
  else end = mid - 1; // C개 이상의 공유기를 설치할 수 없는 경우, 거리를 감소시키기
}
console.log(result);