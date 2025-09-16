class Queues {
    constructor() {
        this.queue = [];
    }

    getLength() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(i) {
       return this.queue.push(i);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Empty queue";
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Empty queue";
        }
        return this.queue[0];
    }
}

const items = new Queues();

items.enqueue(1);
items.enqueue(2);
items.enqueue(3);

console.log(items.peek());
console.log(items.getLength());
console.log(items.isEmpty());
console.log(items.dequeue());