var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return (function recurse(passedTree) {
    if (passedTree.value === target) return true;
    if (passedTree.children.length > 0) {
      for (var i = 0; i < passedTree.children.length; i ++) {
        if (recurse(passedTree.children[i])) return true;
      }
    }
    return false;
  })(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
