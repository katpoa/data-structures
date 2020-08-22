

// Instantiate a new graph
var Graph = function() {
  this.graph = {}; // edge list {'node': ['edges']}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add node as key to graph {} and set value to []
  this.graph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //loop through graph {}
  if (JSON.stringify(node) in this.graph) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through graph
  for (let key in this.graph) {
    //    if edge list includes node, delete it
    console.log(this.graph[key]);
    if (this.graph[key].includes(node)) {
      //      .splice(edgelist.indexOf(node), 1);
      let nodeIndex = this.graph[key].indexOf(node);
      this.graph[key].splice(nodeIndex, 1);
    }
  }
  //convert node to string
  node = JSON.stringify(node);
  console.log(node);
  //delete this.graph at that node
  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  fromNode = JSON.stringify(fromNode);
  return this.graph[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if graph contains fromNode amd toNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    //JSON.stringify fromNode and toNode
    var fromKey = JSON.stringify(fromNode);
    var toKey = JSON.stringify(toNode);
    this.graph[fromKey].push(toNode);
    this.graph[toKey].push(fromNode);
  } else {
    return false;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromKey = JSON.stringify(fromNode);
  var toKey = JSON.stringify(toNode);
  var toNodeIndex = this.graph[fromKey].indexOf(toNode);
  var fromNodeIndex = this.graph[toKey].indexOf(fromNode);
  this.graph[fromKey].splice(toNodeIndex, 1);
  this.graph[toKey].splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through this.graph
  for (let key in this.graph) {
    //cb(key)
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: constant O(1)
  contains: linear O(n)
  removeNode: quadratic O(n^2)
  hasEdge: linear O(n)
  addEdge: linear O(n)
  removeEdge: linear O(n)
  forEachNode: linear O(n)
 */


