// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 한 줄씩 읽으며 처리
let i = 0;
while (true) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  
  // a와 b가 모두 0일 때 프로그램 종료
  if (a == 0 && b == 0) {
    break;
  }
  else {
    console.log(a + b);
  }
  i++;
}