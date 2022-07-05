let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

let n = Number(input[0]); // 데이터의 개수(N)
let arr = input[1].split(' ').map(Number); // 수열 입력

// LIS 배열
let d = [0];

// 이진 탐색을 활용한 LIS 알고리즘 수행
for (let i = 0; i < n; i++) {
  let x = arr[i];
  // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
  if (d[d.length - 1] < x) d.push(x);
  // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
  else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

// 가장 긴 증가하는 부분 수열의 길이 출력
console.log(d.length - 1);
