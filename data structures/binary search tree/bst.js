class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert = (value) => {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BSTNode(value);
        this.left.parent = this;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BSTNode(value);
        this.right.parent = this;
      } else {
        this.right.insert(value);
      }
    }
  };

  search = (target) => {
    if (this.value === target) return this;
    else if (target < this.value) {
      if (!this.left) return false;
      else return this.left.search(target);
    } else if (target > this.value) {
      if (!this.right) return false;
      else return this.right.search(target);
    }
  };

  deleteByValue = (value) => {
    return this.delete(this.search(value));
  };

  delete = (node) => {
    const children = this._numChildren(node);
    const parent = node.parent;

    if (children === 0) {
      if (parent.left === node) {
        parent.left = null;
      } else parent.right = null;
    } else if (children === 1) {
      // store reference to child of node to be deleted
      const child = node.left ? node.left : node.right;

      // replace the node to be deleted w/ it's child
      if (parent?.left === node) {
        parent.left = child;
      } else parent.right = child;

      // update the parent pointer
      child.parent = parent;
    } else if (children === 2) {
      // get the inorder succssor of the to-be-deleted node
      const successor = this._getMinValueNode(node.right);
      // copy it's value to the node formerly holding the value we want to delete
      node.value = successor.value;

      // delete the successor now that it's value has been copied
      return this.delete(successor);
    }
  };

  /*
    returns the minimum value in a given subtree.
  */
  _getMinValueNode = (node) => {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  };

  /*
    returns the number of children of a given node (0, 1, or 2).
  */
  _numChildren = (node) => {
    let numChildren = 0;
    if (node.left) numChildren++;
    if (node.right) numChildren++;
    return numChildren;
  };
}

class BST {
  constructor(value) {
    this.root = value ? new BSTNode(value) : null;
  }

  insert = (value) => {
    if (!this.root) this.root = new BSTNode(value);
    else this.root.insert(value);
  };

  search = (target) => {
    if (this.root) {
      return this.root.search(target);
    } else console.log("Item could not be found as there is no tree");
  };

  delete = (target) => {
    return this.root.deleteByValue(target);
  };

  print = () => {
    if (!this.root) console.log("There is no tree");
    else {
      console.log("------");
      this._print(this.root);
    }
  };

  _print = (currentNode) => {
    if (currentNode !== null) {
      this._print(currentNode.left);
      console.log(currentNode.value);
      this._print(currentNode.right);
    }
  };

  height = () => {
    if (this.root) {
      return this._height(this.root, 0);
    } else return 0;
  };

  _height = (currentNode, currentHeight) => {
    if (!currentNode) {
      return currentHeight;
    }
    const leftHeight = this._height(currentNode.left, currentHeight++);
    const rightHeight = this._height(currentNode.right, currentHeight++);

    return Math.max(leftHeight, rightHeight);
  };
}

const tree = new BST(5);
tree.insert(4);
tree.insert(6);
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.print();

console.log("test searching a valid value: ", tree.search(11));
console.log("test searching a valid value: ", tree.search(999));

console.log("height of tree", tree.height());

console.log("delete 5");
tree.delete(5);
tree.print();
console.log("delete 4");
tree.delete(4);
tree.print();
console.log("delete 11");
tree.delete(11);
tree.print();
console.log("delete 10");
tree.delete(10);
tree.print();
console.log("delete 9");
tree.delete(9);
tree.print();

console.log("height of tree", tree.height());
