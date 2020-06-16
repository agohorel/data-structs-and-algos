class Queue {
  constructor() {
    this.storage = [];
  }

  length = () => {
    return this.storage.length;
  };

  enqueue = (value) => {
    this.storage.splice(0, 0, value);
  };

  dequeue = () => {
    if (this.storage.length > 0) {
      return this.storage.pop();
    } else {
      console.error('Cannot dequeue from empty queue!');
      return null;
    }
  };
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log('length of queue: ', q.length());
console.log('items in queue: ', q.storage);

console.log('dequeued value: ', q.dequeue());
console.log('dequeued value: ', q.dequeue());
console.log('dequeued value: ', q.dequeue());
console.log('dequeued value: ', q.dequeue());

console.log('length of queue: ', q.length());
console.log('items in queue: ', q.storage);
