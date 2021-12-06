let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 공의 개수 N과 바구니의 개수 K를 입력받기
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

// 1부터 K까지의 합
let summary = 0;
for (let i = 1; i < k + 1; i++) {
  summary += i;
}

// 공의 개수가 부족한 경우
if (summary > n) {
  console.log(-1);
}
else {
  n -= summary;
  if (n % k == 0) console.log(k - 1); // K개에 각각 1씩 더하기
  else console.log(k);
}