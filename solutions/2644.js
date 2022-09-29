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
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n');

// 노드의 수(N)
let n = Number(input[0]);
// 거리를 계산할 두 사람
let [targetX, targetY] = input[1].split(' ').map(Number);
// 간선의 수(M)
let m = Number(input[2]);
// 그래프(graph) 입력
let graph = [];
for (let i = 0; i <= n; i++) {
	graph.push([]);
}
// 간선 정보 입력
for (let i = 3; i < m + 3; i++) {
	let [x, y] = input[i].split(' ').map(Number);
	graph[x].push(y);
	graph[y].push(x);
}

// 각 노드에 대한 방문 여부(거리)
let visited = Array(n + 1).fill(-1);
queue = new Queue();
queue.enqueue(targetX);
visited[targetX] = 0; // 출발 노드까지의 거리는 0
// 큐가 빌 때까지 반복
while (queue.getLength() != 0) {
	// 큐에서 하나의 원소를 뽑아 출력하기
	x = queue.dequeue();
	// 인접 원소를 하나씩 확인
	for (y of graph[x]) {
		// 처음 방문하는 경우에만 최단 거리를 기록
		if (visited[y] == -1) {
			queue.enqueue(y);
			// 최단 거리 기록
			visited[y] = visited[x] + 1;
		}
	}
}

console.log(visited[targetY]);
