let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 노드의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)

let graph = []; // 전체 그래프(graph) 정보
for (let i = 0; i <= n; i++) graph.push([]);
/// 각 노드에 대한 방문 여부
let visited = new Array(n + 1).fill(false);
let result = 0; // 정답

for (let i = 2; i < m + 2; i++) { // 전체 간선 입력받기
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(x) {
  visited[x] = true; // 방문 처리
  result++; // 카운트
  for (let i of graph[x]) {
    // 인접한 노드 중에서 방문하지 않은 노드 방문
    if (visited[i] == false) {
      dfs(i);
    }
  }
}

dfs(1);
console.log(result - 1);
