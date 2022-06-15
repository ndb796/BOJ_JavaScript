/*
1일: 5원
2일: 7원
3일: 5원
4일: 4원
5일: 2원
6일: 7원
7일: 8원
8일: 5원
9일: 3원
10일: 4원
가격: [5, 7, 5, 4, 2, 7, 8, 5, 3, 4]
정답: [b, s,  ,  , b,  , s,  , b, s]

핵심 아이디어: "그냥 매 날짜를 기준으로
다음 날짜에 가격이 오른다면, 사기"
따라서, 두 인접한 날짜의 차이만 고려하면 된다.

이때 [2, 7, 8]같은 경우는
2에서 샀다가 8일 때 팔도록 하는 것과
2에서 샀다가 7일 때 팔고, 다시 7에서 샀다가 8일 때 파는 것과 같다.
그래서 구현상 매일 사고 팔고 하는 식으로 짜도 된다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 날짜
let w = Number(input[0].split(' ')[1]); // 초기 금액

// 날짜별 가격을 입력받아 배열로 만들기
let prices = [];
for (let i = 1; i <= n; i++) {
  prices.push(Number(input[i]));
}

// 각 날짜를 확인하면서
for (let i = 0; i < n - 1; i++) {
  // 다음날에 가격이 오른다면, 오늘 사서 내일 팔기
  if (prices[i] < prices[i + 1]) {
    // 오늘 구매 가능한 개수
    let cnt = parseInt(w / prices[i]); 
    // (구매한 개수 X 시세 차익)만큼 더해주기
    w += cnt * (prices[i + 1] - prices[i]);
  }
}

console.log(w);
