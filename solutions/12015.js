// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
      else start = mid + 1;
    }
    return end;
  }
  
  // readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // let input = fs.readFileSync('input.txt').toString().split('\n');
  
  let n = Number(input[0]); // 배열의 크기(N)
  let arr = input[1].split(' ').map(Number); // 수열
  
  // LIS 배열
  let d = [0]; // 가능한 최솟값보다 작은 수를 처음에 하나 삽입
  
  // 이진 탐색을 활용한 LIS 알고리즘 수행
  for (x of arr) {
    // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    if (d[d.length - 1] < x) {
      d.push(x);
    }
    // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    else {
      let index = lowerBound(d, x, 0, d.length);
      d[index] = x;
    }
  }
  
  // LIS 배열의 길이를 출력
  console.log(d.length - 1);