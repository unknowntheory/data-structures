var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {

    var newNode = Node(value);
    
    if ( !list.head && !list.tail) {
      list.head = newNode;
    }
    
    if (list.tail) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    
    list.tail = newNode;

  };

  list.removeHead = function() {
    var output = list.head.value;
    
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
    // update new heads previous to be null
    return output;
  };

  list.contains = function(target) {
    var output = false;
    var search = function(node) {
      if (node.value === target) {
        output = true;
      }
      if (node.next !== null) {
        search(node.next);
      }
    };
    
    search(list.head);
  


    return output;
 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *///     the complexity of a linked list is linear, O(n)



