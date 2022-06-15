/*
단순한 접근을 고려하면,
4중 반복문을 이용해서 O(N^4)의 알고리즘을 설계할 수 있습니다.

[시간 초과]
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let A = [], B = [], C = [], D = [];

for (let i = 1; i <= n; i++) {
  let [a, b, c, d] = [...input[i].split(' ').map(Number)];
  A.push(a), B.push(b), C.push(c), D.push(d);
}
let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      for (let l = 0; l < n; l++) {
        if (A[i] + B[j] + C[k] + D[l] == 0) cnt++;
      }
    }
  }
}
console.log(cnt);

시간 제한이 12초이기 때문에
O(N^2)이나 O(N^2 * logN) 정도의 알고리즘을 설계하면 문제를 풀 수 있다.

[핵심 아이디어]
시간을 줄이기 위해서 메모리를 써서 "미리" 무언가를 계산해 놓기.
배열 A, B, C, D가 있을 때
A와 B만 사용해서 "모든 합"을 미리 구해놓기.

*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 각 배열에 들어갈 원소의 개수 N
let A = [], B = [], C = [], D = []; // 4개의 배열(A, B, C, D)

// 각 배열에 원소 넣기
for (let i = 1; i <= n; i++) {
  let [a, b, c, d] = [...input[i].split(' ').map(Number)];
  A.push(a), B.push(b), C.push(c), D.push(d);
}

// A랑 B만을 고려해서 미리 "가능한 합"의 개수들을 미리 구해 놓기
// A[2] + B[3] = 7이고, A[5] + B[4] = 7이라고 한다면,
// 합계 "7"을 만드는 경우가 2개 존재한다는 의미입니다.
// {7: 2}
let dict = {};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let sum = A[i] + B[j];
    if (sum in dict) dict[sum]++;
    else dict[sum] = 1;
  }
}

// 이제 C랑 D만을 보면서, 가능한 합계에 해당하는지 확인
let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let sum = C[i] + D[j];
    // -sum이 앞서 A와 B의 가능한 합인지 확인
    if (-sum in dict) result += dict[-sum];
  }
}
console.log(result);
