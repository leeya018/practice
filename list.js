class Node {
  data;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class List {
  head;
  constructor(head) {
    this.head = head;
  }
  add(newNode) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  remove(value) {
    // remove start
    if (this.head.data == value) {
      if (this.head.next) {
        this.head = this.head.next;
        return;
      }
    }
    let curr = this.head;
    let prev = null;
    while (curr !== null && curr.data !== value) {
      prev = curr;
      curr = curr.next;
      console.log({ prev, curr });
    }
    // remov the end
    if (curr.next === null) {
      prev.next == null;
      // remove middle
    } else {
      prev.next = curr.next;
    }
  }

  find(value) {
    let curr = this.head;
    while (curr && curr.data !== value) {
      curr = curr.next;
    }
    // console.log(curr);
    if (!curr) {
      console.log("not found");
    } else {
      console.log("found");
    }
  }
}
const h = new Node(1);

const node2 = new Node(2);
const list = new List(h);
const node3 = new Node(3);
list.add(node2);
list.add(node3);
console.log(list);
// list.remove(3);
// console.log("after remove 3");
console.log(list);
console.log("find 1");
list.find(2);
list.find(3);
list.find(24);
list.find(3);
