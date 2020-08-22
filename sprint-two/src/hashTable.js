

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(index);
  // check if bucket for index exists?
  if ( targetBucket !== undefined) {
    for (var i = 0; i < targetBucket.length; i++) {
      if (targetBucket[i][0] === k) {
        targetBucket[i][1] = v;
      } else {
        targetBucket.push([k, v]);
      }
    }
  } else {
    // if bucket doesnt already exist for index
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(index);
  if (targetBucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < targetBucket.length; i++) {
    if (targetBucket[i][0] === k) {
      return targetBucket[i][1];
    }
  }
};
// if we were to accomodate collisions would potentially create more unique index based on both k + v rather than overwriting and each bucket carries unique

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).pop();
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: constant O(1) (worst case: all tuples in same bucket array = linear  O(n))
  retrieve: constant O(1) (worst case: all tuples in same bucket array = linear  O(n))
  remove: constant O(1)
 */


