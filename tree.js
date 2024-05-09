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
  constructor(root) {
    this.root = root;
  }
  add(newNode, curr) {
    if (newNode.data > curr.data) {
      curr = curr.right;
    } else if (newNode.data <= curr.data) {
      curr = curr.left;
    }
    this.add(newNode, curr);
  }
}

//main
const node1 = new Node(1);
console.log(node1);
let tree = new Tree(node1);
const node2 = new Node(2);

tree.add(node2, tree.root);
console.log(tree);
