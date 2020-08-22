var BinarySearchTree = function(value) {
  var root = {};
  root.value = value;
  root.left = null;
  root.right = null;
  _.extend(root, bstMethods);
  return root;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  _.extend(node, bstMethods);
  console.log(this.root);
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

bstMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  } else {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
  return false;
};

bstMethods.depthFirstLog = function(func) {
  // apply func to this.value
  func(this.value);
  if (this.left !== null) {
    //  recursively call depthFirstLog(func)
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    //  recursively call depthFirstLog(func)
    this.right.depthFirstLog(func);
  }
};

/*
bstMethods.breadthFirstLog = function(func) {
  // while tree is not empty
  var queue = [this.value];
  func(queue[0]);
  queue.shift();
  queue.push(this.left, this.right);
  .breadthFirstLog(func, )

  func(this.value);
  for (var key in this) {
    func(this.left);
    func(this.right);
  }
  // implement using a queue, at each level remove parent node and add its children
}; */

/*
 * Complexity: What is the time complexity of the above functions?
  insert: logarithmic O(log n), worst case: O(n)
  contains: logarithmic O(log n), worst case: O(n)
  depthFirstLog: linear O(n)
 */
