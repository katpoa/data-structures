var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      node.next = list.tail;
    } else {
      var current = list.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      console.log(current.next);
      list.tail = current.next;
    }
  };

  list.removeHead = function() {
    if (list.head.next === null) {
      var temp = list.head;
      list.head = null;
      return temp;
    }
    var next = list.head.next;
    var temp1 = list.head;
    delete list.head;
    list.head = next;
    return temp1;
  };

  list.contains = function(target) {
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
 */
