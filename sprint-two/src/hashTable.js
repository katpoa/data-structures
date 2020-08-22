

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if bucket for index exists?
  if (this._storage[index] !== undefined) {
    this._storage[index].push([k, v]);
  } else {
    // if bucket doesnt already exist for index
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if bucket length is > 1
  //  iterate through bucket array
  //
  this._storage.get(index); // should get index for v; })
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


