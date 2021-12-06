let input = require('fs').readFileSync('/dev/stdin');
input = input.toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  let c = Number(input[i + 1].split(' ')[0]);
  let s = Number(input[i + 1].split(' ')[1]);
  arr.push([c, s, i]);
}
arr.sort((a, b) => a[1] - b[1]); // 크기를 기준으로 오름차순 정렬

let summary = 0; // 전체 누적 합
let colorSummary = Array(200001).fill(0); // 색상별 누적 합
let result = Array(n).fill(0) // 공의 등장 순서(i)별 최종 결과

let start = 0;
while (start < n) {
  // 크기가 같은 공의 마지막 인덱스 찾기
  let end = start;
  while (end < n && arr[start][1] == arr[end][1]) end += 1;
  // 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
  for (let i = start; i < end; i++) {
    result[arr[i][2]] = summary - colorSummary[arr[i][0]];
  }
  // 합계 값 갱신
  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1];
    summary += arr[i][1];
  }
  start = end;
}
console.log(result.join('\n'));