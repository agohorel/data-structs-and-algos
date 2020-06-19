class Node {
  constructor(value = null, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print = () => {
    if (!this.head) {
      print(null);
    } else {
      let cur = this.head;
      console.log(`${cur.value}<---head`);

      while (cur.next_node) {
        cur = cur.next_node;
        if (cur.next_node !== null) {
          console.log(cur.value);
        } else {
          console.log(`${cur.value}<--tail`);
        }
      }
    }
  };

  length = () => {
    let length = 0;

    if (!this.head) {
      return length;
    } else {
      let cur = this.head;
      length++;

      while (cur.next_node) {
        cur = cur.next_node;
        length++;
      }
      return length;
    }
  };

  addToHead = (value) => {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      const prev_head = this.head;
      node.next_node = prev_head;
      this.head = node;
    }
  };

  addToTail = (value) => {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;

      while (cur.next_node) {
        cur = cur.next_node;
      }
      cur.next_node = node;
    }
  };

  removeFromHead = () => {
    if (!this.head) {
      return;
    } else {
      const prev_head = this.head;
      this.head = prev_head.next_node;
    }
  };

  removeFromTail = () => {
    if (!this.head) {
      return;
    } else {
      let cur = this.head;
      let prev = null

      while (cur.next_node) {
        prev = cur;
        cur = cur.next_node;
      }
      prev.next_node = null;
    }
  };

  reverse = () => {
    if (!this.head) {
      return;
    } else {
      let cur = this.head;
      let prev = null;

      while (cur) {
        let next = cur.next_node;
        cur.next_node = prev;

        prev = cur;
        cur = next;
      }
      this.head = prev;
    }
  };
}

const ll = new LinkedList();

console.log('test adding to tail:');
ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.print();
console.log('');

console.log('test adding to head:');
ll.addToHead(4);
ll.print();
console.log('');

console.log('test reversing linked list:');
ll.reverse();
ll.print();
console.log('');

console.log('test removing from head:');
ll.removeFromHead();
ll.print();
console.log('');

console.log('test removing from tail:');
ll.removeFromTail();
ll.print();
console.log('');
