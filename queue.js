// queue .

class Queue {
  items;
  constructor() {
    this.items = [];
  }
  add(data) {
    console.log("add");
    this.items.push(data);
  }
  remove() {
    this.items.pop();
  }
  removeItem(data) {
    console.log("remove");
    let tempArr = [];
    let flag = -1;
    while (!this.isEmpty()) {
      let item = this.items.pop();
      if (item === data) {
        flag = 1;
        console.log("found");
        break;
      }
      tempArr.push(item);
    }

    if (flag === -1) {
      console.log("not found");
    }
    while (tempArr.length > 0) {
      this.items.push(tempArr.pop());
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

let q = new Queue();
q.add(1);
q.add(2);
q.removeItem(1);
q.add(3);
q.add(5);
q.add(3);
q.removeItem(5);
q.add(3);

console.log(q);
