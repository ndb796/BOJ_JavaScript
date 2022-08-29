/*
1. "."를 기준으로 문자열을 나눈다.
2. "X"로만 구성된 묶음을 확인한다.
  * 홀수개라면, -1을 출력하고 프로그램 종료.
  * 짝수개인 경우
    * 4의 배수라면, 전부 A로 채운다.
    * 아니라면 (4로 나눈 몫) * 4개만큼 A를 출력하고, B를 2번 출력한다.
*/
// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let board = input[0];
arr = board.split(".");

let answer = "";
let odd = false; // 홀수개인 경우

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let length = current.length; // 현재 "X" 묶음의 길이
  if (length > 0) {
    // 홀수개라면, -1을 출력하고 종료해야 함
    if (length % 2 == 1) {
      odd = true;
      break;
    }
    else { // 짝수개라면
      if (length % 4 == 0) { // 4의 배수라면
        // 전부 "AAAA"로 채우기
        answer += "AAAA".repeat(parseInt(length / 4));
      }
      else { // 4의 배수가 아니라면
        // 4의 배수만큼까지는 "AAAA"로 채우기
        answer += "AAAA".repeat(parseInt(length / 4));
        // 뒤에 "BB"를 추가하기
        answer += "BB";
      }
    }
  }
  if (i != arr.length - 1) answer += ".";
}
if (!odd) console.log(answer);
else console.log(-1);
