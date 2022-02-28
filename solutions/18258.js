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

let n = Number(input[0]); // 연산 횟수
let queue = new Queue(); // 큐 초기화

let answer = '';
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ');
  if (line[0] == 'push') { // 원소 삽입
    queue.enqueue(Number(line[1]));  
  }
  else if (line[0] == 'pop') { // 원소 삭제
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.dequeue() + '\n';
  }
  else if (line[0] == 'size') { // 원소의 개수
    answer += queue.getLength() + '\n';
  }
  else if (line[0] == 'empty') { // 큐가 비어있는지
    if (queue.getLength() == 0) answer += 1 + '\n';
    else answer += 0 + '\n';
  }
  else if (line[0] == 'front') { // 앞쪽 원소 출력
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.peek() + '\n';
  }
  else if (line[0] == 'back') { // 뒤쪽 원소 출력
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.back() + '\n';
  }
}
console.log(answer);
