// 2. Implement in **any programming language of your choice**:
//    - A simple **Stack**
//    - A simple **Queue**

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop(item) {
    return this.stack.pop(item);
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length == 0;
  }
}

const mystack = new Stack();
console.log(mystack.isEmpty());
console.log(mystack.push('tolu'));
console.log(mystack.push('dave'));
console.log(mystack.push('atos'));
console.log(mystack.push('crane'));
console.log(mystack.pop());
console.log(mystack.peek());
console.log(mystack.isEmpty());
console.log(mystack);
