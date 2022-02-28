let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 연산 횟수
let stack = []; // 스택 초기화

let answer = '';
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ');
  if (line[0] == 'push') { // 원소 삽입
    stack.push(Number(line[1]));  
  }
  else if (line[0] == 'pop') { // 원소 삭제
    if (stack.length == 0) answer += -1 + '\n';
    else answer += stack.pop() + '\n';
  }
  else if (line[0] == 'size') { // 원소의 개수
    answer += stack.length + '\n';
  }
  else if (line[0] == 'empty') { // 스택이 비어있는지
    if (stack.length == 0) answer += 1 + '\n';
    else answer += 0 + '\n';
  }
  else if (line[0] == 'top') { // 최상단 원소 출력
    if (stack.length == 0) answer += -1 + '\n';
    else answer += stack[stack.length - 1] + '\n';
  }
}
console.log(answer);
