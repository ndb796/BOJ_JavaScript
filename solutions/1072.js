// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let x = parseInt(input[0].split(' ')[0]); // 게임 횟수(X)
let y = parseInt(input[0].split(' ')[1]); // 이긴 횟수(Y)

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = 10 ** 9; // 충분히 큰 수로 설정

// 100을 곱했을 때 정밀도를 벗어나는 경우(정밀도 오차)를 대비하여 임시적으로 BigInt() 사용
let ratio = parseInt(BigInt(y) * BigInt(100) / BigInt(x)); // 승률 계산

// 이진 탐색 수행(반복적)
let result = -1;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(추가로 이긴 횟수)

  // 승률이 변하는지 확인
  let check = false;
  // 100을 곱했을 때 정밀도를 벗어나는 경우(정밀도 오차)를 대비하여 임시적으로 BigInt() 사용
  let currentRatio = parseInt((BigInt(y + mid) * BigInt(100)) / BigInt(x + mid));
  if (currentRatio != ratio) check = true;

  if (check) { // 승률이 변한다면 "추가로 이긴 횟수"를 감소시키기
    result = mid;
    end = mid - 1;
  }
  else { // 승률이 변하지 않는다면 "추가로 이긴 횟수"를 증가시키기
    start = mid + 1;
  }
}

// 승률이 절대 변하지 않는다면(승률이 99% 이상인 경우와 동치)
if (result == -1) {
  console.log(-1);
}
else {
  console.log(result);
}