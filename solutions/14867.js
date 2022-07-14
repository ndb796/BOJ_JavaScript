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

// (A의 최대 용량, B의 최대 용량, A의 목표 상태, B의 목표 상태) 입력
let [a, b, c, d] = input[0].split(' ').map(Number);
let queue = new Queue();
queue.enqueue([0, 0, 0]); // 최소 연산 횟수, A 상태, B 상태
let visited = new Set();
let found = false;

// 현재의 (A 상태, B 상태)를 방문 처리
function visit(dist, nx, ny) {
  // A에 3, B에 7만큼 물이 있다면 "3,7"이라는 문자열을 visited에 삽입
  if (!visited.has(nx + ',' + ny)) {
    queue.enqueue([dist, nx, ny]);
    visited.add(nx + ',' + ny);
  }
}

while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
  // 최소 연산 횟수, A 상태, B 상태
  let [dist, x, y] = queue.dequeue();
  if (x == c && y == d) { // 목표 상태에 도달한 경우
    console.log(dist); // 최소 연산 횟수 출력
    found = true;
    break;
  }
  // 6가지 연산을 하나씩 수행하는 방식으로 BFS 수행
  [nx, ny] = [x, 0]; // Empty B
  visit(dist + 1, nx, ny);
  [nx, ny] = [0, y]; // Empty A
  visit(dist + 1, nx, ny);
  [nx, ny] = [x, b]; // Fill B
  visit(dist + 1, nx, ny);
  [nx, ny] = [a, y]; // Fill A
  visit(dist + 1, nx, ny);
  // B에서 A로 물 옮기기
  if (x + y < a) [nx, ny] = [x + y, 0];
  else [nx, ny] = [a, x + y - a];
  visit(dist + 1, nx, ny);
  // A에서 B로 물 옮기기
  if (x + y < b) [nx, ny] = [0, x + y];
  else [nx, ny] = [x + y - b, b];
  visit(dist + 1, nx, ny);
}
if (!found) console.log(-1);
