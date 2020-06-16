class Stack {
  constructor() {
    this.storage = [];
  }

  length = () => {
    return this.storage.length;
  };

  push = (value) => {
    this.storage.push(value);
  };

  pop = () => {
    if (this.length() > 0) {
      return this.storage.pop();
    } else {
      console.error('Cannot pop from empty stack!');
      return null;
    }
  };
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

console.log('length of stack:', s.length());
console.log('items in stack: ', s.storage);

console.log('popped value: ', s.pop());
console.log('popped value: ', s.pop());
console.log('popped value: ', s.pop());
console.log('popped value: ', s.pop());

console.log('length of stack:', s.length());
