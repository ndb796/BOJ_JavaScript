// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

// 행(r)과 열(c)의 크기 입력
let [r, c] = input[0].split(' ').map(Number);
// 전체 맵 정보 입력
let graph = [];
for (let i = 1; i <= r; i++) {
  graph.push(input[i]);
}

// 상, 하, 좌, 우 방향 정보
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result = 0; // 최대 거리
let visited = new Set(); // 방문한 알파벳 집합

function dfs(x, y, dist) {
  result = Math.max(result, dist);
  // 인접한 위치를 확인하며
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 맵을 벗어나는 경우 무시
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
      continue;
    }
    // 방문하지 않은 알파벳인 경우
    if (!visited.has(graph[nx][ny])) {
      visited.add(graph[nx][ny]);
      dfs(nx, ny, dist + 1);
      visited.delete(graph[nx][ny]);
    }
  }
}

// 가장 왼쪽 위에서 출발
visited.add(graph[0][0]);
dfs(0, 0, 1);
console.log(result);
