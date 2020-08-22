var BinarySearchTree = function(value) {
  var root = {};
  root.value = value;
  root.left = null;
  root.right = null;
  _.extend(root, BSTMethods);
  return root;
};


var BSTMethods = {};

BSTMethods.insert = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  _.extend(node, BSTMethods);
  if (value > this.value) {
    //insert on the right
    if (this.right === null) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  } else {
    //insert on the left
    if (this.left === null) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  }
};

BSTMethods.contains = function(value) {

};


BSTMethods.depthFirstLog = function(func) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
