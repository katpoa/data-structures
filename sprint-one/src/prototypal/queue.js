var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var last = this.storage['0'];
    delete last;
    if (this.count > 0) {
      this.count--;
    }
    for (var key in this.storage) {
      var newKey = parseInt(key) - 1;
      this.storage[newKey] = this.storage[key];
      delete this.storage[key];
    }
    return last;
  },
  size: function() {
    return this.count;
  }
};


