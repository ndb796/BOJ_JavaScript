// readline 모듈보다는 fs를 이용해 파일 전체를 읽기
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

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

let n = Number(input[0]); // 학생(노드)의 수
let m = Number(input[1]); // 친구 관계(간선)의 수
// 그래프 정보
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

// 모든 친구(노드)에 대한 최단 거리 초기화
let distance = new Array(n + 1).fill(-1);
distance[1] = 0; // 시작점까지의 거리는 0으로 설정

// 너비 우선 탐색(BFS) 수행
let queue = new Queue();
queue.enqueue(1);
while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
  let now = queue.dequeue();
  // 현재 노드에서 이동할 수 있는 모든 노드를 확인
  for (let nextNode of graph[now]) {
    if (distance[nextNode] == -1) { // 방문하지 않은 노드라면
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}
// 최단 거리가 2 이하인 모든 친구(노드)의 수를 계산
let result = 0;
for (let i = 1; i <= n; i++) {
  if (distance[i] != -1 && distance[i] <= 2) {
    result++;
  }
}
console.log(result - 1); // 자기 자신은 제외
