var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var recurse = function(passedNode) {
      if (passedNode.next === null) {
        passedNode.next = Node(value);
        list.tail = passedNode.next;
      } else {
        recurse(passedNode.next);
      }
    };
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    }
    else {
      recurse(list.head);
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var cache = list.head.value;
      list.head = list.head.next;
      return cache;      
    }
  };

  list.contains = function(target) {
    return (function recurse(passedNode) {
      if (passedNode.value === target) {
        return true;
      }
      if (passedNode.next !== null) {
        return recurse(passedNode.next);
      }
      return false;
    })(list.head);
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
var example = {
  value: 'x',
  next: {
    value: 'y',
    next: {
      value: 'z',
      next: null
    }
  }
};