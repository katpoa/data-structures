var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  newTree.count = 0;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = {'value': value, 'children': []};
  _.extend(node, treeMethods);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  //iterate newTree.children
  for (var child = 0; child < this.children.length; child++) {
    var tree2 = this.children[child];
    //  else recursive call on child
    if (tree2.contains(target)) {
      return true;
    }
  }
  return false;
};

/* treeMethods.size = function() {
  var count = 0;
  // if node is not null && current node has no children
  if (this.value && this.children.length === 0) {
    count++;
    return count;
  }
  // loop through children
  for (var child = 0; child < this.children.length; child++) {
    //   recursively call size on children
    count++;
    children[child].size();
  }
}; */

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant O(1) - since we're only adding to the end
  contains: linear O(n)
 */
