let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = Number(input[0]); // 노드의 개수
let m = Number(input[1]); // 간선의 개수

// 그래프 초기화
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF)); // 일단 무한으로 초기화
}
for (let i = 1; i <= n; i++) {
  graph[i][i] = 0; // 자기 자신으로 가는 비용은 0원
}
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  // 중복 간선이 있다면 가장 비용이 작은 것만 고려
  graph[a][b] = Math.min(graph[a][b], c);
}

// 플로이드 워셜 알고리즘 수행(최단 경로 계산)
for (let k = 1; k <= n; k++) { // K는 거쳐가는 노드
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      // K를 거쳐갈 때 비용이 더 저렴하다면 테이블 갱신
      if (graph[a][b] > graph[a][k] + graph[k][b]) {
        graph[a][b] = graph[a][k] + graph[k][b];
      }
    }
  }
}

// 모든 A에서 B로 가는 최단 경로 출력
let answer = '';
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (graph[a][b] == INF) answer += '0 ';
    else answer += graph[a][b] + ' ';
  }
  answer += '\n';
}
console.log(answer);
