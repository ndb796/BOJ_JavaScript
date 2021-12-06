let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/*
  arr = [2, 4, -10, 4, -9]
  set = [2, 4, -10, -9]
  sorted = [-10, -9, 2, 4]
  map = {
    '-10': 0,
    '-9': 1,
    '2': 2,
    '4': 3
  }
  print(map[arr[i]])
*/

let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = '';
for (x of arr) {
  answer += myMap.get(x) + ' ';
}
console.log(answer);