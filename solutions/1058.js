let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = Number(input[0]); // 노드의 개수

// 그래프 초기화
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(new Array(n).fill(INF));
  let line = input[i].split('');
  for (let j = 0; j < n; j++) {
    if (line[j] == 'Y') graph[i - 1][j] = 1;
  }
}
for (let i = 0; i < n; i++) {
  graph[i][i] = 0; // 자기 자신으로 가는 비용은 0원
}

// 플로이드 워셜 알고리즘 수행
for (let k = 0; k < n; k++) { // K는 거쳐가는 노드
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      // K를 거쳐갈 때 비용이 더 저렴하다면 테이블 갱신
      if (graph[a][b] > graph[a][k] + graph[k][b]) {
        graph[a][b] = graph[a][k] + graph[k][b];
      }
    }
  }
}

// 모든 A에서 B로 가는 최단 경로 확인
let twoFriends = new Array(n).fill(0);
for (let a = 0; a < n; a++) {
  for (let b = 0; b < n; b++) {
    // 거리가 2 이하인 노드의 수 세기
    if (a != b && graph[a][b] <= 2) twoFriends[a]++;
  }
}
// 거리가 2 이하인 노드의 수 중에서 최댓값을 출력
console.log(twoFriends.reduce((a, b) => Math.max(a, b)));
