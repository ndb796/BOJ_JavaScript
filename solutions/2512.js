// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 지방의 수(N)
let arr = input[1].split(' ').map(Number); // 각 지방의 예산 요청
let m = Number(input[2]); // 총 예산(M)

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)

  // 배정된 예산의 총액 계산 
  let total = 0;
  for (x of arr) { // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(mid, x); // 예산 배정
  }

  if (total <= m) { // 총 예산이 충분하다면, 상한액을 증가시키기
    result = mid;
    start = mid + 1;
  }
  else { // 총 예산이 부족하다면, 상한액을 감소시키기
    end = mid - 1;
  }
}
console.log(result);