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

// 맵의 크기(N)
let n = Number(input[0]);
// 전체 맵 입력받기
let graph = [];
for (let i = 1; i <= n; i++) {
	let row = input[i].split(' ').map(Number);
	graph.push(row);
}
// 방문 처리 배열
let visited = null;

// 동, 북, 서, 남
let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];

function dfs(x, y) {
	// 동, 북, 서, 남 위치로 4가지 방향 확인
	for (let i = 0; i < 4; i++) {
		let nx = x + dx[i];
		let ny = y + dy[i];
		// 공간을 벗어나는 경우 무시
		if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
			continue;
		}
		// 처음 방문하는 위치이면서 높이 이상이라면 재귀적으로 방문 처리
		if (!visited[nx][ny] && height < graph[nx][ny]) {
			visited[nx][ny] = true;
			dfs(nx, ny);
		}
	}
}

let maxCnt = 0;
let height = 0;
for (; height <= 100; height++) {
	visited = Array.from(Array(n), () => Array(n).fill(false));
	let cnt = 0; // 연결 요소의 개수
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// 연결 요소를 찾은 경우
			if (!visited[i][j] && height < graph[i][j]) {
				visited[i][j] = true;
				dfs(i, j);
				cnt++;
			}
		}
	}
	maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
