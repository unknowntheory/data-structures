

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  obj = {};
  obj.value = node;
  obj.edges = [];
  this.storage[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// iterate through the edges array   forEach
// go into the iterated value's node
// filter the array 
  var connections = this.storage[node]['edges']; // 9.edges

  for (var key = 0; key < connections.length; key++) {
    this.storage[connections[key]]['edges'] = this.storage[connections[key]]['edges'].filter(x => x !== node);
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.storage[fromNode] && this.storage[toNode]) {
    return this.storage[fromNode]['edges'].some(x => x === toNode);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode]['edges'].push(toNode);
  this.storage[toNode]['edges'].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode]['edges'] = this.storage[fromNode]['edges'].filter(x => x !== toNode);
  this.storage[toNode]['edges'] = this.storage[toNode]['edges'].filter(x => x !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.storage) {
    cb(this.storage[key]['value']);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */    
