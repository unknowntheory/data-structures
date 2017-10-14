var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me

  return newTree;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value) { // time complexity = O(1)
  
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) { // time complexity = O(n)
  var output = false;
  var search = function(node) {
 
    if (node.value === target) {
      output = true;
    } 
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        search(child);
      });
    }
  };
  search(this);
  return output;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */ 
