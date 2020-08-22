var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var top = this.storage[this.count - 1];
  delete top;
  if (this.count > 0) {
    this.count--;
  }
  return top;
};

Stack.prototype.size = function() {
  return this.count;
};
