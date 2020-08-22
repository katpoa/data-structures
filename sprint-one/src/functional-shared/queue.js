var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.count = 0;
  _.extend(queue, queueMethods);
  return queue;
};


var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    var top = this.storage['0'];
    delete this.storage['0'];
    if (this.count > 0) {
      this.count--;
    }
    for (var key in this.storage) {
      var newKey = parseInt(key) - 1;
      this.storage[newKey] = this.storage[key];
      delete this.storage[key];
    }
    return top;
  },

  size: function() {
    return this.count;
  }
};


