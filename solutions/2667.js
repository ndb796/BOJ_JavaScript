let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 맵의 크기
let data = []; // 맵 정보
let visited = []; // 각 위치에 대한 방문 처리

for (let i = 1; i <= n; i++) {
  let line = input[i].split('').map(Number);
  data.push(line);
  visited.push(new Array(n).fill(false));
}

// 북, 동, 남, 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// 연결된 모든 위치를 방문 처리하는 함수
function dfs(x, y) {
  cnt++;
  visited[x][y] = true; // 방문 처리
  for (let i = 0; i < 4; i++) { // 북, 동, 남, 서 각각 확인
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 맵의 범위를 벗어난 경우 무시
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    // 해당 위치가 집이면서, 아직 방문하지 않은 위치인 경우
    if (data[nx][ny] == 1 && visited[nx][ny] == false) {
      dfs(nx, ny); // 재귀적으로 방문 처리
    }
  }
}

let result = 0;
let resultList = [];
let cnt = 0; // 현재 단지에 포함된 집의 수
// 모든 위치를 확인하며
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 해당 위치가 집이면서, 아직 방문하지 않은 위치인 경우
    if (data[i][j] == 1 && visited[i][j] == false) {
      dfs(i, j); // 연결된 모든 위치를 방문 처리(단지 형성)
      result++; // 단지의 수 카운트
      resultList.push(cnt); // 각 단지에 포함된 집의 수 기록
      cnt = 0;
    }
  }
}

console.log(result); // 단지의 수 출력
resultList.sort((a, b) => a - b);
for (let x of resultList) { // 각 단지에 포함된 집의 수 출력
  console.log(x);
}
