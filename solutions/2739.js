// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  // 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함합니다. (백틱 문자 사용)
  console.log(`${n} * ${i} = ${n * i}`);
}