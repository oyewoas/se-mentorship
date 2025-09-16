class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue(item) {
    return this.queue.shift(item);
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myqueue = new Queue();
console.log(myqueue.isEmpty());
console.log(myqueue.enqueue('tolu'));
console.log(myqueue.enqueue('dave'));
console.log(myqueue.enqueue('atos'));
console.log(myqueue.enqueue('crane'));
console.log(myqueue.dequeue());
console.log(myqueue.peek());
console.log(myqueue.isEmpty());
console.log(myqueue);
