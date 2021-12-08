/*
예를 들어 N = 5일 때 배열의 형태는 다음과 같다.
[
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
]
값 x에 대하여 f(x)를 배열에서 x보다 작거나 같은 데이터의 개수로 정의하자.
따라서 f(x)는 값이 x 이하인 원소들의 인덱스 중에서 upperBound()의 역할을 수행한다.
참고로 i번째 행에 대하여 min(x // i, N)를 계산하는 방식으로 f(x)를 O(N)에 구할 수 있다.
그러므로 이진 탐색으로 x를 변경하면서, f(x) >= k일 때마다 x를 기록하면 정답이다.
*/

// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]); // 배열의 크기(N)
let k = Number(input[1]); // 인덱스 K

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점

  let total = 0; // mid보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) { // 각 행마다 계산
    total += Math.min(parseInt(mid / i), n);
  }

  if (total >= k) { // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result = mid; // result에 기록
    end = mid - 1;
  }
  else { // mid보다 작거나 같은 데이터의 개수가 k 미만이라면
    start = mid + 1;
  }
}
console.log(result);