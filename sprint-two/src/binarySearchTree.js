var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    var valueArr = [];
    // go through and extract all values recursevly from tree
    (function recurse(node) {
      valueArr.push(node.value);
      if (tree.left) recurse(tree.left);
      if (tree.right) recurse(tree.right);
    })(tree);
    // sort the tree with the added value
    valueArr.push(value);
    valueArr.sort(function(a, b) {
      return a - b; 
    });
    // construct a new binary search tree
    (function makeNode(arr) {
      
      var midpointIndex = Math.floor(arr.length / 2);
      // console.log(midpointIndex);
      var newTree = BinarySearchTree(arr[midpointIndex]);
      var leftArr = arr.slice(0, midpointIndex);
      if (leftArr.length > 0) newTree.left = makeNode(leftArr);
      var rightArr = arr.slice(midpointIndex + 1);
      if (rightArr.length > 0) newTree.right = makeNode(rightArr);
      console.log(newTree);
      return newTree;
    })(valueArr);
  };

  tree.contains = function(value) {

  };

  tree.depthFirstLog = function() {

  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */