let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/*
  시간 복잡도: O(NM)
  각 동전들을 하나씩 확인하면서, 최소 개수 테이블(정답 테이블)을 갱신  
*/

let INF = 10001;
let [n, k] = input[0].split(' ').map(Number);
let d = new Array(k + 1).fill(INF); // 처음에는 모든 금액 만들 수 없음
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i])); // 각 동전 데이터 입력
}

d[0] = 0; // 동전을 아예 안 쓰면, 0원이 되므로
for (let coin of arr) { // 하나씩 동전을 확인하며
  for (let x = 0; x <= k - coin; x++) { // x원을 만들 수 있는지 확인
    if (d[x] != INF) { // x원을 만들 수 있다면, (x + coin)원도 만들 수 있음
      d[x + coin] = Math.min(d[x + coin], d[x] + 1);
    }
  }
}

if (d[k] == INF) console.log(-1); // k원을 만들 수 없는 경우
else console.log(d[k]); // k원을 만들 수 있는 경우
