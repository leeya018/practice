class Node {
  data;
  left;
  right;
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root;
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  remove(data, curr) {
    if (curr.data < data) {
      if (curr.left && curr.left.data === data) {
        curr.left = curr.left.left;
      } else {
        curr = curr.left;
      }
    } else if (curr.data > data) {
      if (curr.right && curr.right.data === data) {
        curr.right = curr.right.right;
      } else {
        curr = curr.right;
      }
    }
  }
}

//main
let tree = new Tree();

tree.insert(4);
tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);
console.log(tree);
console.log(tree.root.right);
// tree.inorder(tree.root);
tree.remove(1, tree.root);
// console.log(tree);
