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

// 시작(s)과 목표(t)를 입력받기
let [s, t] = input[0].split(' ').map(Number);

// 너비 우선 탐색(BFS) 수행
let queue = new Queue();
// (값, 최소 연산 횟수) 삽입
queue.enqueue([s, 0]);
let visited = new Set([s]);
let found = false;

// 큐가 빌 때까지 반복하기
while (queue.getLength() != 0) {
  let [value, dist] = queue.dequeue();
  if (value > 1e9) continue; // 값의 범위를 벗어나는 경우
  if (value == t) { // 목표 값에 도달한 경우
    console.log(dist + 1); // 최소 연산 횟수 + 1을 출력
    found = true;
    break;
  }
  for (let oper of ['*', '+']) { // 각 연산자로 BFS 수행
    let nextValue = value;
    if (oper == '*') nextValue *= 2; // 2를 곱하기
    if (oper == '+') { // 1을 수의 가장 오른쪽에 추가
      nextValue *= 10;
      nextValue += 1;
    }
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, dist + 1]);
      visited.add(nextValue);
    }
  }
}
// 바꿀 수 없는 경우
if (!found) console.log(-1);
