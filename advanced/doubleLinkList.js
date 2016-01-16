function DoubleLinkedList() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = DoubleLinkedList.methods.addToTail;
  list.addToHead = DoubleLinkedList.methods.addToHead;
  list.removeTail = DoubleLinkedList.methods.removeTail;
  list.removeHead = DoubleLinkedList.methods.removeHead;
  list.containsFromTail = DoubleLinkedList.methods.containsFromTail;
  list.containsFromHead = DoubleLinkedList.methods.containsFromHead;
  return list;
}

DoubleLinkedList.methods = {
  addToTail: function(value) {
    if (this.tail === null) {
      this.tail = DoubleNode(value, null, null);
    } else {
      this.tail.next = DoubleNode(value, this.tail, null);
      this.tail = this.tail.next;
    }
    if (this.head === null) this.head = this.tail;
  },
  addToHead: function(value) {
    if (this.head === null) {
      this.head = DoubleNode(value, null, null);
    } else {
      this.head.prev = DoubleNode(value, null, this.head);
      this.head = this.head.prev;
    }
    if (this.tail === null) this.tail = this.head;
  },
  removeTail: function() {
    if (this.tail) {
      var oldTailValue = this.tail.value;
      if (this.tail.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.tail = null;
        this.head = null;
      }
      return oldTailValue;
    }
  },
  removeHead: function() {
    if (this.head) {
      var oldHeadValue = this.head.value;
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      return oldHeadValue;
    }
  },
  containsFromTail: function(value) {
    return (function recurse(passedNode) {
      if (passedNode.value === value) return true;
      if (passedNode.prev === null) return false;
      return recurse(passedNode.prev);
    })(this.tail);
  },
  containsFromHead: function(value) {
    return (function recurse(passedNode) {
      if (passedNode.value === value) return true;
      if (passedNode.next === null) return false;
      return recurse(passedNode.next);
    })(this.head);
  }
};


function DoubleNode(value, prev, next) {
  return {
    value: value,
    next: next,
    prev: prev
  };
}




// {value: 234,
// next: {value: 499, next: null, previous: },
// previous: null;
// }