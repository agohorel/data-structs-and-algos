class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print = () => {
    if (!this.head) print("list is empty!");
    else {
      let cur = this.head;
      console.log(`${cur.value}<---head`);

      while (cur.next) {
        cur = cur.next;
        if (cur.next) {
          console.log(cur.value);
        } else {
          console.log(`${cur.value}<--tail`);
        }
      }

      console.log(
        `\nlist length: ${this.length}, list head: ${this.head.value}, list tail: ${this.tail.value}\n\n`
      );
    }
  };

  addToHead = (value) => {
    const newHead = new Node(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const prevHead = this.head;
      this.head = newHead;
      newHead.next = prevHead;
      prevHead.prev = newHead;
    }
    this.length++;
  };

  addToTail = (value) => {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const prevTail = this.tail;
      this.tail = node;
      node.next = null;
      node.prev = prevTail;
      node.prev.next = node;
    }
    this.length++;
  };

  addAtIndex = (index, value) => {
    if (index < 0) throw new Error("Index must be positive");
    if (index > this.length) {
      throw new Error("Index is greater than list length");
    }

    const newNode = new Node(value);

    // handle case where there is no list yet
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // handle case where index is start of the list
    else if (index === 0) {
      this.addToHead(value);
    } else if (index === this.length) {
      this.addToTail(value);
    } else {
      let cur = this.head;
      let idx = 0;

      while (cur.next) {
        if (idx === index - 1) break;
        cur = cur.next;
        idx++;
      }

      // insert node
      newNode.next = cur.next;
      cur.next = newNode;
      // update prev pointers
      newNode.prev = cur;
      newNode.next.prev = newNode;
      this.length++;
    }
  };

  removeAtIndex = (index) => {
    if (!this.head) throw new Error("Cannot delete from empty list");
    if (index < 0) throw new Error("Index must be a positive number");
    if (index > this.length) {
      throw new Error("Index is greater than the length of the list");
    }

    let cur = this.head;
    let idx = 0;

    while (cur.next) {
      if (idx === index) break;
      cur = cur.next;
      idx++;
    }

    // remove node
    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
    this.length--;
  };

  removeFromHead = () => {
    if (!this.head) return;

    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
  };

  removeFromTail = () => {
    if (!this.tail) return;

    const newTail = this.tail.prev;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  };
}

const LL = new LinkedList();
console.log("test adding to head");
LL.addToHead(3);
LL.addToHead(2);
LL.addToHead(1);
LL.print();

console.log("test adding to tail");
LL.addToTail(4);
LL.addToTail(5);
LL.addToTail(6);
LL.print();

console.log("test removing from head");
LL.removeFromHead();
LL.print();

console.log("test removing from tail");
LL.removeFromTail();
LL.print();

console.log("test adding at index");
LL.addAtIndex(1, 999);
LL.print();

console.log("test removing at index");
LL.removeAtIndex(1);
LL.print();
