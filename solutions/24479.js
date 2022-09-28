let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 노드의 개수(N), 간선의 개수(M), 시작 노드(R)
let [n, m, r] = input[0].split(' ').map(Number);

// 노드가 N개인 그래프 초기화
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([]);
}

// 그래프 데이터 입력
for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// 인접 리스트에 대하여 노드 번호 순으로 오름차순
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array(n + 1).fill(0); // 각 노드에 대한 방문 여부(순서)
let number = 1; // 방문 순서

// DFS(깊이 우선 탐색) 소스 코드
function dfs(x) {
  visited[x] = number; // x를 방문 처리
  number++;
  for (let y of graph[x]) { // x와 인접한 노드 y를 방문
    if (visited[y] == 0) { // 아직 인접 노드 y를 방문하지 않았다면
      dfs(y);
    }
  }
}

dfs(r); // 시작 노드에서 출발

let answer = "";
// 각 노드를 방문한 순서를 출력
for (let i = 1; i <= n; i++) {
  answer += visited[i] + "\n";
}
console.log(answer);
