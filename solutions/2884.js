// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if (minute >= 45) {
  minute -= 45;
}
else {
  hour -= 1;
  minute = minute + 15;
  if (hour == -1) {
    hour = 23;
  }
}

console.log(hour, minute);