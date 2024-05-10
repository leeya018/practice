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
      if (curr.left === null) {
        curr.left = newNode;
        return;
      } else {
        curr = curr.left;
      }
    } else if (newNode.data <= curr.data) {
      if (curr.right === null) {
        curr.right = newNode;
        return;
      } else {
        curr = curr.right;
      }
    } else {
      throw new Error("not possible");
    }
    return this.add(newNode, curr);
  }
}

//main
const node1 = new Node(1);
console.log(node1);
let tree = new Tree(node1);
const node2 = new Node(2);
const node5 = new Node(5);
const node0 = new Node(0);

tree.add(node2, tree.root);
tree.add(node5, tree.root);
tree.add(node0, tree.root);
console.log(tree);
