

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.nodes;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].indexOf(this.nodes[toNode]) > -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(this.nodes[toNode]);
  this.nodes[toNode].push(this.nodes[fromNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = this.nodes[fromNode].indexOf(this.nodes[toNode]);
  if (toNodeIndex > -1) this.nodes[fromNode].splice(toNodeIndex, 1);

  var fromNodeIndex = this.nodes[toNode].indexOf(this.nodes[fromNode]);
  if (fromNodeIndex > -1) this.nodes[toNode].splice(fromNodeIndex, 1);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // Graph: constant
 // addNode: constant
 // contains: linear
 // removeNode: constant
 // hasEdge: linear
 // addEdge: constant
 // removeEdge: linear
 // forEachNode: linear






