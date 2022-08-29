/*
아이디어: 일단 작은 수부터 더하는 게 좋다.
S = 200일 때, 일단 1부터 더한 뒤에, S를 넘지 않도록 한다.

가설: 1, 2, 3, ... 순서대로 더했을 때 S를 넘지 않도록 하되
최대한 많이 더한다. 그때까지의 수의 개수가 정답이다.

검증: 1, 2, 3, 4, 5, 6, ..., 18, 19까지 더하면 190이다.
이때 19 대신에 29로 바꾸어주면 200이 나온다.
이것이 최댓값. 따라서 답은 19
*/
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]); // 자연수 N 입력

let i = 1; // 1부터 더해나가도록
let summary = 0; // 합계
let cnt = 0;
while (true) {
  // 현재 i를 더한 경우 N보다 커진다면 종료
  if (summary + i > n) break;
  // 그렇지 않으면, i를 합계에 더해주고 i를 1만큼 증가
  summary += i;
  i += 1;
  cnt += 1;
}
console.log(cnt);
