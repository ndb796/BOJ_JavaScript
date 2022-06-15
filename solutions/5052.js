/*
A = "911"
B = "91125426"
상황에서, A가 B의 접두어이기 때문에 B에게 전화를 걸 수 없습니다.
전화번호부가 있을 때, 접두어 관계가 존재하는지 찾는 프로그램을 작성합니다.

[핵심 아이디어]
1. 오름차순 정렬을 수행합니다.
2. 인접한 두 개의 문자열을 확인하면서 접두어 관계인지 확인합니다.

정렬된 결과: ["456", "4567", "4576"]
만약 접두어를 형성하는 경우, 정렬된 이후에 인접한 문자열끼리 봤을 때
접두어 관계임을 알 수 있다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCases; tc++) {
  let n = Number(input[line]); // 전화번호의 개수
  let books = []; // 전화번호부
  for (let i = 1; i <= n; i++) {
    let code = input[line + i];
    books.push(code);
  }

  books.sort(); // 문자열 기준으로 오름차순 정렬
  let result = false;
  for (let i = 0; i < n - 1; i++) {
    // 앞 문자열이 뒤 문자열보다 짧은 경우에만 확인
    if (books[i].length < books[i + 1].length) {
      let prefix = true;
      // 앞 문자열이 뒤 문자열의 접두어라면
      for (let j = 0; j < books[i].length; j++) {
        if (books[i][j] != books[i + 1][j]) {
          prefix = false;
          break;
        }
      }
      if (prefix) { // 접두어 관계인 경우
        result = true;
        break;
      }
    }
  }
  if (result) console.log("NO"); // 접두어 관계 있음
  else console.log("YES"); // 접두어 관계 없음
  
  line += n + 1; // 현재 테스트 케이스 종료
}
