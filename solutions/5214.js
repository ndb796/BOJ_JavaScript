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

// 역의 개수(N), 간선의 개수(K), 하이퍼튜브의 개수(M)
let [n, k, m] = input[0].split(' ').map(Number);
// 그래프 정보(N개의 역과 M개의 하이퍼튜브는 모두 노드)
// 하이퍼튜브의 노드 번호는 N + 1번부터 출발
let graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(' ').map(Number);
  for (let x of arr) {
    graph[x].push(n + i); // 노드 → 하이퍼 튜브
    graph[n + i].push(x); // 하이퍼 튜브 → 노드
  }
}

let visited = new Set([1]); // 1번 노드에서 출발
let queue = new Queue();
queue.enqueue([0, 1]); // [거리, 노드 번호]
let found = false;

while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
  let [dist, now] = queue.dequeue();
  // N번 노드에 도착한 경우
  if (now == n) {
    // 절반은 하이퍼 튜브
    console.log(parseInt(dist / 2) + 1); // 시작 노드도 포함
    found = true;
    break;
  }
  for (let y of graph[now]) { // 인접 노드를 하나씩 확인
    if (!visited.has(y)) { // 아직 방문하지 않았다면
      queue.enqueue([dist + 1, y]);
      visited.add(y); // 방문 처리
    }
  }
}
if (!found) console.log(-1); // N번 노드에 도달 불가능
