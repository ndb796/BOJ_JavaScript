let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let k = Number(input[0]);

let stack = [];
for (let i = 1; i <= k; i++) {
    let x = Number(input[i]);
    if (x == 0) stack.pop();
    else stack.push(x);
}

let result = 0;
for (let x of stack) {
    result += x;
}
console.log(result);
