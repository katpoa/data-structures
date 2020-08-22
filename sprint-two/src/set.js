var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var property = item.split(' ');
  if (!(property[0] in this._storage)) {
    this._storage[property[0]] = property[1];
  }
};

setPrototype.contains = function(item) {
  var property = item.split(' ');
  return (property[0] in this._storage);
};

setPrototype.remove = function(item) {
  var property = item.split(' ');
  delete this._storage[property[0]];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: constant O(1) - worst case linear O(n)
  contains: constant O(1) - worst case linear O(n)
  remove: constant O(1)
 */
