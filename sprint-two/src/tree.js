var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = {'value': value, 'children': []};
  _.extend(node, treeMethods);
  this.children.push(node);
  console.log(this);
};

treeMethods.contains = function(target, wasFound = false) {
  if (this.value === target) {
    return true;
  }
  //iterate newTree.children
  for (var child = 0; child < this.children.length; child++) {
    console.log('iterating through childen', this.children[child]);
    if (this.children[child].value === target) {
      wasFound = true;
      return wasFound;
    }
    var tree2 = this.children[child];
    //  else recursive call on child
    if (tree2.children.length !== 0) {
      tree2.contains(target, wasFound);
    }
  }
  return wasFound;
};

treeMethods.size = function() {
  var count = 0;
  // basically contains but counting values
  return count;
};

/*
if (this.value === target) {
  return true;
}
//iterate newTree.children
for (var child = 0; child < this.children.length; child++) {
  console.log('iterating through childen', this.children[child]);
  if (this.children[child].value === target) {
    return true;
  }
  var tree2 = this.children[child];
  //  else recursive call on child
  tree2.contains(target);
}
return false;
}; */

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant O(1) - since we're only adding to the end
  contains: linear O(n)

 */
