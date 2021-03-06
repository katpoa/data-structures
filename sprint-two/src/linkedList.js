var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var current = list.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      list.tail = current.next;
    }
  };

  list.removeHead = function() {
    if (list.head.next === null) {
      var temp = list.head;
      list.head = null;
      return temp.value;
    }
    var next = list.head.next;
    var temp1 = list.head;
    delete list.head;
    list.head = next;
    return temp1.value;
  };

  list.contains = function(target) {
    if (list.head === null) {
      return false;
    }
    var current = list.head;
    var wasFound = false;
    while (current.next !== null && current.value !== target) {
      current = current.next;
    }
    if (current.value === target) {
      wasFound = true;
    }
    return wasFound;
  };

  list.size = function() {
    var counter = 0;
    var current = list.head;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant O(1)
 removeHead: constant O(1)
 contains:  linear O(n)
 size: linear O(n);

 */
