// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0].split(' ')[0]);
let x = Number(input[0].split(' ')[1]);
let answer = '';

// 배열의 모든 원소를 수 자료형으로 변환
let data = input[1].split(' ').map(num => Number(num));

// 배열의 값에 하나씩 접근
for (let cur of data) {
  // 그 값이 x보다 작은 경우 출력
  if (cur < x) {
    answer += cur + ' ';
  }
}
console.log(answer);