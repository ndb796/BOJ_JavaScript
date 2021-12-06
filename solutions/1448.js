let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
// 오름차순 정렬
arr.sort((a, b) => a - b);

let result = -1;
for (let i = 0; i < n - 2; i++) {
  // 삼각형 둘레의 최댓값을 구하는 것이므로 인접한 3개만 확인
  let a = arr[i];
  let b = arr[i + 1];
  let c = arr[i + 2];
  if (c < a + b) { // 삼각형의 조건에 부합한다면
    result = a + b + c;
  }
}

console.log(result);