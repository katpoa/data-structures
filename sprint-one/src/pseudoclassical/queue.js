var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.count;
};
