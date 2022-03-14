let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 정수 삼각형의 크기
let arr = []; // 정수 삼각형 데이터
let d = []; // 최적의 해가 담기는 다이나믹 프로그래밍 테이블

for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  arr.push(line);
  d.push(new Array(i).fill(0));
}

d[0][0] = arr[0][0]; // 첫 번째 층(행)
for (let i = 1; i < n; i++) { // 두 번째 층(행)부터 테이블 갱신
  for (let j = 0; j <= i; j++) {
    // 왼쪽 위에서 오는 경우
    let leftUp = 0;
    if (j > 0) leftUp = d[i - 1][j - 1];
    // 바로 위에서 오는 경우
    let up = 0;
    if (j < i) up = d[i - 1][j];
    d[i][j] = Math.max(leftUp, up) + arr[i][j];
  }
}

// 가장 마지막 층(행)에서 가장 큰 값을 출력
console.log(d[n - 1].reduce((a, b) => Math.max(a, b)));
