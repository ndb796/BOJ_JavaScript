// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let testCases = Number(input[0]);

// 각각의 테스트 케이스를 확인
for (let t = 1; t <= testCases; t++) {
  let data = input[t].split(' ').map(Number);
  // 첫 번째 수는 데이터의 개수
  let n = data[0];
  // n개의 점수에 대하여 평균 계산
  let summary = 0;
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }
  let average = summary / n;
  // 점수가 평균을 넘는 학생 수 계산
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (data[i] > average) {
      cnt += 1;
    }
  }
  // 점수가 평균을 넘는 학생의 비율에 toFixed()를 이용해 소수점 아래 셋째 자리까지 출력
  console.log(`${(cnt / n * 100).toFixed(3)}%`);
}