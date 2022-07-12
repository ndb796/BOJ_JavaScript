// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

// 노드의 개수(N), 쿼리의 개수(M)
let [n, m] = input[0].split(' ').map(Number);
// 트리 정보 입력받기
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 1; i < n; i++) {
  let [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

// 깊이 우선 탐색(DFS) 함수 구현
// visited와 distance는 전역 변수처럼 사용
function dfs(x, dist, visited, distance) {
  // 각 노드는 한 번만 방문
  if (visited[x]) return;
  visited[x] = true; // 방문 처리
  distance[x] = dist;
  for (let [y, cost] of graph[x]) {
    dfs(y, dist + cost, visited, distance);
  }
}

// 각 쿼리(query)마다 매번 DFS를 수행
for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(' ').map(Number);
  let visited = new Array(n + 1).fill(false);
  let distance = new Array(n + 1).fill(-1);
  dfs(x, 0, visited, distance);
  console.log(distance[y]); // y까지의 최단 거리
}
