let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let d = new Array(101).fill(0); // 다이나믹 테이블 초기화
// 초기항 설정
d[1] = 1;
d[2] = 1;
d[3] = 1;

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  let n = Number(input[line]);

  for (let x = 4; x <= n; x++) {
    d[x] = d[x - 2] + d[x - 3]; // 점화식에 따라서 계산
  }
  console.log(d[n]);
  
  line++;
}
