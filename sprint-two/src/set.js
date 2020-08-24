var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(item in this._storage)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return (item in this._storage);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.size = function() {
  let length = 0;
  for (key in this._storage) {
    length++;
  }
  return length;
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: constant O(1) - worst case linear O(n)
  contains: constant O(1) - worst case linear O(n)
  remove: constant O(1)
  size: linear O(n)
 */
