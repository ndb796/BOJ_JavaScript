// 일부 문제의 경우 fs를 이용하면 permission denied 오류가 발생
// 본 문제에서는 readline 모듈을 이용해 문제를 해결
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
  let x = Number(input[0]);
  let y = Number(input[1]);

  if (x > 0 && y > 0) {
    console.log(1);
  }
  else if (x < 0 && y > 0) {
    console.log(2);
  }
  else if (x < 0 && y < 0) {
    console.log(3);
  }
  else if (x > 0 && y < 0) {
    console.log(4);
  }
});