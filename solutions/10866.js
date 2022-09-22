class Deque {
    constructor() {
        this.front = this.back = undefined;
        this.length = 0;
    }
    addFront(value) {
        if (!this.front) this.front = this.back = { value };
        else this.front = this.front.next = { value, prev: this.front };
        this.length += 1;
    }
    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.front = this.front.prev).next = undefined;
        if (this.length > 0) this.length -= 1;
        return value;
    }
    peekFront() { 
        return this.front && this.front.value;
    }
    addBack(value) {
        if (!this.front) this.front = this.back = { value };
        else this.back = this.back.prev = { value, next: this.back };
        this.length += 1;
    }
    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.back = this.back.next).back = undefined;
        if (this.length > 0) this.length -= 1;
        return value;
    }
    peekBack() { 
        return this.back && this.back.value;
    }
    getSize() {
        return this.length;
    }
}

let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let answer = '';

let deque = new Deque;
for (let i = 1; i <= n; i++) {
    let line = input[i].split(' ');
    if (line[0] == "push_front") {
        let x = Number(line[1]);
        deque.addFront(x);
    }
    else if (line[0] == "push_back") {
        let x = Number(line[1]);
        deque.addBack(x);
    }
    else if (line[0] == "pop_front") {
        let x = deque.removeFront();
        if (typeof x == "undefined") {
            answer += -1 + '\n';
        }
        else {
            answer += x + '\n';
        }
    }
    else if (line[0] == "pop_back") {
        let x = deque.removeBack();
        if (typeof x == "undefined") {
            answer += -1 + '\n';
        }
        else {
            answer += x + '\n';
        }
    }
    else if (line[0] == "size") {
        let size = deque.getSize();
        answer += size + '\n';
    }
    else if (line[0] == "empty") {
        let size = deque.getSize();
        if (size == 0) {
            answer += 1 + '\n';
        }
        else {
            answer += 0 + '\n';
        }
    }
    else if (line[0] == "front") {
        let x = deque.peekFront();
        if (typeof x == "undefined") {
            answer += -1 + '\n';
        }
        else {
            answer += x + '\n';
        }
    }
    else if (line[0] == "back") {
        let x = deque.peekBack();
        if (typeof x == "undefined") {
            answer += -1 + '\n';
        }
        else {
            answer += x + '\n';
        }
    }
}

console.log(answer);
