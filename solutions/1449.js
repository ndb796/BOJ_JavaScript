/*
[테스트 케이스 분석]
N = 4, L = 2
위치: 1, 2, 100, 101
1번 테이프: 0.5 ~ 2.5
2번 테이프: 99.5 ~ 101.5
================
N = 4, L = 3
위치: 1, 2, 3, 4
1번 테이프: 0.5 ~ 3.5
2번 테이프: 3.5 ~ 6.5
================
N = 3, L = 1
위치: 1, 2, 3
1번 테이프: 0.5 ~ 1.5
2번 테이프: 1.5 ~ 2.5
3번 테이프: 2.5 ~ 3.5
*/
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('./input.txt');
let input = file.toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 물이 새는 곳
let l = Number(input[0].split(' ')[1]); // 테이프 길이

let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b); // 오름차순 정렬

let current = 0;
let answer = 0;
let end = 0;
// 앞에서부터 하나씩 확인하며
while (current < n) {
  // 테이프가 커버하지 못하는 곳이라면
  if (end < arr[current]) {
    // 항상 (현재 위치 - 0.5)에서 (현재 위치 - 0.5 + l)까지 붙임
    end = arr[current] - 0.5 + l;
    answer += 1; // 붙인 테이프 수 카운트
  }
  current += 1; // 다음 물이 새는 곳 확인
  // console.log(current, end);
}
console.log(answer);
