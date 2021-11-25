// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

// n개의 문자열을 차례대로 확인
for (let i = 1; i <= n; i++) {
  let data = input[i];

  // 문자열에서 점수 계산
  let score = 0;
  let length = 0;
  for (let char of data) {
    // 정답인 경우
    if (char == 'O') {
      // 연속된 'O'의 개수만큼 점수에 더하기
      score += length + 1;
      length += 1;
    }
    else {
      length = 0;
    }
  }
  console.log(score);
}