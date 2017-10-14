

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // time complexity = O(1)
  obj = {};
  obj.value = node;
  obj.edges = [];
  this.storage[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // time complexity = O(1)
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // time complexity = O(n)
// iterate through the edges array   forEach
// go into the iterated value's node
// filter the array 
  var connections = this.storage[node]['edges'];

  for (var key = 0; key < connections.length; key++) {
    this.storage[connections[key]]['edges'] = this.storage[connections[key]]['edges'].filter(x => x !== node);
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // time complexity = O(n)

  if (this.storage[fromNode] && this.storage[toNode]) { 
    return this.storage[fromNode]['edges'].some(x => x === toNode);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // time complexity = O(1)
  this.storage[fromNode]['edges'].push(toNode);
  this.storage[toNode]['edges'].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// since out edges are stored in a n array this is linear or O(n)
// however if our edges were stored in an object it could be constant
  this.storage[fromNode]['edges'] = this.storage[fromNode]['edges'].filter(x => x !== toNode);
  this.storage[toNode]['edges'] = this.storage[toNode]['edges'].filter(x => x !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // time complexity = O(n)

  for (var key in this.storage) {
    cb(this.storage[key]['value']);
  }

};


Graph.prototype.reassignNodeEdges = function(node, edgesArr) {
// removes all previous edges of a given node and connects the node to all
// nodes in the given array argument
  if (!Array.isArray(edgesArr)) {
    return 'Second argement must be an array';
  }

  this.storage[node]['edges'].forEach(function(x) {
    this.removeEdge(node, x);
  }, this);

  edgesArr.forEach(function(x) {
    if (this.storage[x] === undefined) {
      this.addNode(x);
    }
    this.addEdge(x, node);
  }, this);
};







/*
 * Complexity: What is the time complexity of the above functions?
 */    
