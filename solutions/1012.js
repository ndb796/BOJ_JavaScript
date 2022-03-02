let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;

while (testCases--) { // 테스트 케이스만큼 반복
  let [n, m, k] = input[line].split(' ').map(Number); // 맵의 크기
  let data = []; // 맵 정보
  let visited = []; // 각 위치에 대한 방문 처리
  
  for (let i = 0; i < n; i++) {
    data.push(new Array(m).fill(0));
    visited.push(new Array(m).fill(false));
  }
  
  for (let i = line + 1; i <= line + k; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    data[x][y] = 1; // 배추가 있는 위치
  }
  
  // 북, 동, 남, 서
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  
  // 연결된 모든 위치를 방문 처리하는 함수
  function dfs(x, y) {
    visited[x][y] = true; // 방문 처리
    for (let i = 0; i < 4; i++) { // 북, 동, 남, 서 각각 확인
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 맵의 범위를 벗어난 경우 무시
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      // 해당 위치가 배추이면서, 아직 방문하지 않은 위치인 경우
      if (data[nx][ny] == 1 && visited[nx][ny] == false) {
        dfs(nx, ny); // 재귀적으로 방문 처리
      }
    }
  }
  
  let result = 0;
  // 모든 위치를 확인하며
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 해당 위치가 배추이면서, 아직 방문하지 않은 위치인 경우
      if (data[i][j] == 1 && visited[i][j] == false) {
        dfs(i, j); // 연결된 모든 위치를 방문 처리(단지 형성)
        result++;
      }
    }
  }
  
  console.log(result); // 배추흰지렁이 수 출력
  line += k + 1; // 다음 테스트 케이스로 넘어가기
}
