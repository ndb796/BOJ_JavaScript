/* [풀이 1]
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

// 사다리 수(N), 뱀의 수(M)
let [n, m] = input[0].split(' ').map(Number);
let ladders = {};
let snakes = {};


// * 단순히 주사위를 굴리면 간선의 길이가 1인 것으로 이해 가능
// * 사다리나 뱀을 타고 가면 간선의 길이가 0인 것으로 이해 가능
//   * 따라서 이 문제는 BFS가 아닌 다익스트라와 같은 최단 경로 알고리즘을 이용해서 해결 가능
//   * 하지만 노드의 개수가 100개이므로, BFS 형식으로도 최단 경로를 찾아 해결 가능

// 사다리 입력
for (let i = 1; i <= n; i++) {
	let [x, y] = input[i].split(' ').map(Number);
	ladders[x] = y;
}

// 뱀 입력
for (let i = n + 1; i <= n + m; i++) {
	let [u, v] = input[i].split(' ').map(Number);
	snakes[u] = v;
}

// 노드가 1부터 100까지인 그래프를 초기화
let graph = [];
for (let i = 0; i <= 100; i++) {
	// 현재 위치 i에서 1~6을 더한 위치로 이동 가능
	adj = [i + 1, i + 2, i + 3, i + 4, i + 5, i + 6];
	graph.push(adj);
}

let visited = Array(101).fill(-1); // 각 노드에 대한 방문 여부(거리)

queue = new Queue();
queue.enqueue(1); // 1번 노드에서부터 BFS 수행
visited[1] = 0; // 1번 노드까지의 거리는 0
// 큐가 빌 때까지 반복
while (queue.getLength() != 0) {
	// 큐에서 하나의 원소를 뽑아 출력하기
	v = queue.dequeue();
	// 사다리나 뱀의 위치인지 검사 (주사위를 굴리는 횟수 추가 X)
	if (v in ladders) {
		x = ladders[v];
		// 처음 방문하는 경우 최단 거리를 기록
		if (visited[x] == -1) {
			queue.enqueue(x);
			visited[x] = visited[v];
		}
		// 방문한 적이 있더라도 더 최단 거리가 있다면
		else if (visited[x] > visited[v]) {
			queue.enqueue(x);
			visited[x] = visited[v];
		}
	} else if (v in snakes) {
		x = snakes[v];
		// 처음 방문하는 경우 최단 거리를 기록
		if (visited[x] == -1) {
			queue.enqueue(x);
			visited[x] = visited[v];
		}
		// 방문한 적이 있더라도 더 최단 거리가 있다면
		else if (visited[x] > visited[v]) {
			queue.enqueue(x);
			visited[x] = visited[v];
		}
	} else {
		// 아직 방문하지 않은 인접한 원소들을 큐에 삽입
		for (x of graph[v]) {
			// 범위를 벗어나는 경우 무시
			if (x < 1 || x > 100) continue;
			// 처음 방문하는 경우 최단 거리를 기록
			if (visited[x] == -1) {
				queue.enqueue(x);
				// 주사위를 굴리는 횟수를 추가
				visited[x] = visited[v] + 1;
			}
			// 방문한 적이 있더라도 더 최단 거리가 있다면
			else if (visited[x] > visited[v]) {
				queue.enqueue(x);
				visited[x] = visited[v] + 1;
			}
		}
	}
}

console.log(visited[100]);
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
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n');

// 사다리 수(N), 뱀의 수(M)
let [n, m] = input[0].split(' ').map(Number);
let roads = {};

// 사다리 입력
for (let i = 1; i <= n; i++) {
	let [x, y] = input[i].split(' ').map(Number);
	roads[x] = y;
}

// 뱀 입력
for (let i = n + 1; i <= n + m; i++) {
	let [u, v] = input[i].split(' ').map(Number);
	roads[u] = v;
}

// 노드가 1부터 100까지인 그래프를 초기화
let graph = [];
for (let i = 0; i <= 100; i++) {
	// 현재 위치 i에서 1~6을 더한 위치로 이동 가능
	adj = [i + 1, i + 2, i + 3, i + 4, i + 5, i + 6];
	graph.push(adj);
}

let visited = Array(101).fill(-1); // 각 노드에 대한 방문 여부(거리)

queue = new Queue();
queue.enqueue(1); // 1번 노드에서부터 BFS 수행
visited[1] = 0; // 1번 노드까지의 거리는 0
// 큐가 빌 때까지 반복
while (queue.getLength() != 0) {
	// 큐에서 하나의 원소를 뽑아 출력하기
	v = queue.dequeue();
	// 아직 방문하지 않은 인접한 원소들을 큐에 삽입
	for (x of graph[v]) {
		// 범위를 벗어나는 경우 무시
		if (x < 1 || x > 100) continue;
		// 사다리나 뱀의 위치인지 검사 (주사위를 굴리는 횟수 추가 X)
        // 사다리나 뱀의 위치인 경우, (시작 노드 = 도착 노드)로 간주 가능
		while (x in roads) {
			x = roads[x];
		}
		// 처음 방문하는 경우 최단 거리를 기록
		if (visited[x] == -1) {
			queue.enqueue(x);
			// 주사위를 굴리는 횟수를 추가(최단 거리 기록)
			visited[x] = visited[v] + 1;
		}
	}
}

console.log(visited[100]);
