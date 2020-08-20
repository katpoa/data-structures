class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue() {
    var last = this.storage['0'];
    delete this.storage['0'];
    if (this.count > 0) {
      this.count--;
    }
    for (var key in this.storage) {
      var newKey = parseInt(key) - 1;
      this.storage[newKey] = this.storage[key];
      delete this.storage[key];
    }
    return last;
  }
  size() {
    return this.count;
  }

}
