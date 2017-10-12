var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
  
    if ( list.head !== null && JSON.stringify(list.head) !== JSON.stringify(list.tail)) {
      defineNext(list.head);
    }  

    if (list.head === null) { 
      list.head = Node(value);
    }
    if (JSON.stringify(list.head) === JSON.stringify(list.tail)) {
      list.head.next = Node(value);
    }
    
    var defineNext = function (node) {
      if (node.next === null) {
        node.next = Node(value);
      } 
      if (node.next !== null) {
        defineNext(node.next);
      }
    };

    list.tail = Node(value);

  };

  list.removeHead = function() {
    var output = list.head.value;
    
    list.head = list.head.next;

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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
