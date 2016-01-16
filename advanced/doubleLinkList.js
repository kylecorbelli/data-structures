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
      this.tail = Node(value, null, null);
    } else {
      this.tail.next = Node(value, this.tail, null);
      this.tail = this.tail.next;
    }
    if (this.head === null) this.head = this.tail;
  },
  addToHead: function(value) {
    if (this.head === null) {
      this.head = Node(value, null, null);
    } else {
      this.head.prev = Node(value, null, this.head);
      this.head = this.head.prev;
    }
    if (this.tail === null) this.tail = this.head;
  },
  removeTail: function() {},
  removeHead: function() {},
  containsFromTail: function(value) {},
  containsFromHead: function(value) {}
};


function Node(value, prev, next) {
  return {
    value: value,
    next: next,
    prev: prev
  }
}




// {value: 234,
// next: {value: 499, next: null, previous: },
// previous: null;
// }