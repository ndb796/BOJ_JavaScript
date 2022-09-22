/*
N = 6이라면,
카드는 [1, 2, 3, 4, 5, 6]

1) 제일 위 카드를 바닥에 버리고, 제일 위 카드를 제일 아래 카드 밑으로 옮긴다.
[3, 4, 5, 6, 2]

2) 제일 위 카드를 바닥에 버리고, 제일 위 카드를 제일 아래 카드 밑으로 옮긴다.
[5, 6, 2, 4]

3) 제일 위 카드를 바닥에 버리고, 제일 위 카드를 제일 아래 카드 밑으로 옮긴다.
[2, 4, 6]

4) 제일 위 카드를 바닥에 버리고, 제일 위 카드를 제일 아래 카드 밑으로 옮긴다.
[6, 4]

5) 제일 위 카드를 바닥에 버리고, 제일 위 카드를 제일 아래 카드 밑으로 옮긴다.
[4]
*/
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
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

// 큐(queue)에 1부터 N까지의 원소를 삽입
let queue = new Queue();
for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
}

for (let i = 0; i < n - 1; i++) {
    let x = queue.dequeue(); // 가장 앞에 있는 원소를 꺼내고
    x = queue.dequeue(); // 다시 가장 앞에 있는 원소를 꺼내서
    queue.enqueue(x); // 그것을 뒤에 넣기
}

console.log(queue.peek());
