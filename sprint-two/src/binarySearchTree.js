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
  var output = false;

  var search = function (node) {
    if (node.value === value) {
      output = true;
    }
    if (value < node.value && node.left !== null) {
      search(node.left);
    }

    if (value > node.value && node.right !== null) {
      search(node.right);
    }

  };
  search(this);
  return output;
};

binaryMethods.depthFirstLog = function(cb) {
  
  var traverse = function (node) {
    cb(node.value);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

  };
 
  traverse(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
