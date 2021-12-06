const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution(input);
  process.exit();
})

function solution(input) {
  // 풍선의 개수 N 입력받기
  let n = Number(input[0]);
  // 모든 풍선의 위치 정보 입력받기
  let data = input[1].split(' ').map(Number);

  let result = 0;
  let arrow = Array(1000001).fill(0); // 각 위치에 있는 화살의 개수

  for (let x of data) {
    if (arrow[x] > 0) { // 해당 높이에 화살이 있다면
      // 화살이 풍선을 맞추고 높이 감소
      arrow[x]--;
      arrow[x - 1]++;
    }
    else { // 해당 높이에 화살이 없다면
      // 해당 높이에 화살 쏘기
      result += 1;
      arrow[x - 1]++;
    }
  }
  console.log(result);
}