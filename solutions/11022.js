// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  console.log(`Case #${t}: ${a} + ${b} = ${a + b}`); // 템플릿 리터럴을 활용한 문자열 출력
}

/*
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
*/
