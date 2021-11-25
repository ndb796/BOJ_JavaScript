// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 한 줄씩 읽으며 처리
let i = 0;
while (i < input.length - 1) { // BOJ에서는 마지막에 줄바꿈 기호가 포함
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);

  i += 1;
  console.log(a + b);
}