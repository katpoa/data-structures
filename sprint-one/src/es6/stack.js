class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    var top = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) {
      this.count--;
    }
    return top;
  }
  size() {
    return this.count;
  }

}