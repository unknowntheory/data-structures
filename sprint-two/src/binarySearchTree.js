var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(binaryMethods);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  
  return newBinarySearchTree;
};


//mainTree.insert(2)

var binaryMethods = {};

binaryMethods.insert = function(value) {

  if (value < this.value && this.left !== null) {
    this.left.insert(value);
  }
  if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  }
  if (value > this.value && this.right !== null) {
    this.right.insert(value);
  }

  if (value > this.value && this.right === null) {
    this.right = BinarySearchTree(value);
  }
};

binaryMethods.contains = function(value) {
  /* function search(node){
   if node.value = value
   return true;
   check if value > node.value && node.right !== null
   call search on node.right
*/function search(node){
  if (true) {
  }
  if (value < node.value && node.left !== null) {
  
  }
  if (value < node.value && node.left === null) {
    
  }
  if (value > node.value && node.right !== null) {
 
  }

  if (value > node.value && node.right === null) {
  
  }

}

}
search(this)

};
binaryMethods.depthFirstLog = function() {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
