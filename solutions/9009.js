let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 피보나치 수들 계산
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스
  while (n > 0) { // n이 0이 될 때까지
    if (n >= pibo[i]) { // 가능한 큰 피보나치 수부터 빼기
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  let answer = '';
  for (let i = result.length - 1; i >= 0; i--) answer += result[i] + ' '; // 오름차순 출력
  console.log(answer);
}