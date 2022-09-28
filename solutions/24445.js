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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

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

// 인접 리스트에 대하여 노드 번호 순으로 내림차순
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

let visited = Array(n + 1).fill(0); // 각 노드에 대한 방문 여부(순서)
let number = 1; // 방문 순서

// BFS(너비 우선 탐색) 소스 코드
function bfs(start) {
  queue = new Queue();
  queue.enqueue(start);
  // 현재 노드를 방문 처리
  visited[start] = number;
  number++;
  // 큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    // 큐에서 하나의 원소를 뽑아 출력하기
    v = queue.dequeue();
    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (i of graph[v]) {
      if (visited[i] == 0) {
        queue.enqueue(i);
        visited[i] = number;
        number++;
      }
    }
  }
}

bfs(r); // 시작 노드에서 출발

let answer = "";
// 각 노드를 방문한 순서를 출력
for (let i = 1; i <= n; i++) {
  answer += visited[i] + "\n";
}
console.log(answer);
