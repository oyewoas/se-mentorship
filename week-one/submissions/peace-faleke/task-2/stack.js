class Stack {
    constructor() {
        this.stack = [];
    }

    getLength() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(i) {
       return this.stack.push(i);
    }

    pop() {
        if (this.isEmpty()) {
            return "Empty stack";
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Empty stack";
        }
        return this.stack[this.stack.length - 1];
    }
}

const items = new Stack();

items.push(1);
items.push(2);
items.push(3);

console.log(items.peek());
console.log(items.getLength());
console.log(items.isEmpty());
console.log(items.pop());


