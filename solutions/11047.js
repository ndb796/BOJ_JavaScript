/*
  문제 요약: 동전을 최소한으로 사용해 K원을 만들기
  해결 방법: 가치가 큰 동전부터 나누어 주기, 가치가 큰 동전은 가치가 작은 동전들의 합으로 표현될 수 있기 때문에 성립
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 동전의 개수
let k = Number(input[0].split(' ')[1]); // 만들어야 할 금액

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let cnt = 0;
// 가치가 큰 동전부터 확인
for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i]); // 해당 동전을 몇 개 사용해야 하는지
  k %= arr[i];
}

console.log(cnt);