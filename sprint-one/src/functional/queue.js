var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var top = storage['0'];
    delete storage['0'];
    if (count > 0) {
      count --;
    }
    for (var key in storage) {
      var newKey = parseInt(key) - 1;
      storage[newKey] = storage[key];
      delete storage[key];
    }
    return top;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
