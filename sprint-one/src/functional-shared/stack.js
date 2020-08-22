var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.count = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var index = this.count - 1;
    var last = this.storage[index];
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
