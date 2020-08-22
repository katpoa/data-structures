var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var last = this.storage[this.count - 1];
    delete last;
    if (this.count > 0) {
      this.count--;
    }
    return last;
  },
  size: function() {
    return this.count;
  }

};


