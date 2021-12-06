let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

// 오름차순 정렬
arr.sort((a, b) => a - b);

let result = 0; // 연속적인 수열 길이의 최댓값
for (let i = 0; i < n; i++) {
  let cnt = 0; // 현재 수부터의 연속적인 수열 길이
  for (let j = 0; j < 5; j++) {
    // 존재하는지 확인
    if (arr.slice(i, i + 5).includes(arr[i] + j)) {
      cnt += 1; 
    }
    result = Math.max(result, cnt);
  }
}

console.log(5 - result);