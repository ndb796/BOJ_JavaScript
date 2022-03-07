class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  back() {
    return this.items[this.tailIndex - 1];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number) // 맵의 크기 입력(N X M)
let arr = []; // 전체 맵 배열
let visited = []; // 방문 여부 배열

for (let i = 1; i <= n; i++) {
  let line = input[i].split('').map(Number);
  arr.push(line);
  visited.push(new Array(m).fill(0));
}

// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let queue = new Queue();
queue.enqueue([0, 0]);
visited[0][0] = 1;

// 큐가 빌 때까지 반복
while (queue.getLength() != 0) {
  let [x, y] = queue.dequeue(); // 현재 위치
  // 현재 위치에서 상, 하, 좌, 우 확인
  for (let i = 0; i < 4; i++) {
    // 다음 위치
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 다음 위치가 미로 범위를 벗어나는 경우 무시
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
      continue;
    }
    // 해당 위치를 처음 방문하면서 이동할 수 있는 경우
    if (visited[nx][ny] == 0 && arr[nx][ny] == 1) {
      visited[nx][ny] = visited[x][y] + 1;
      queue.enqueue([nx, ny]);
    }
  }
}

console.log(visited[n - 1][m - 1]);
