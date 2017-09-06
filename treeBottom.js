var Node = function(val) {
  this.value = val || null;
  this.left = null;
  this.right = null;
}

class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}


function treeBottom(str) {


  var stack = new Stack();

  var buildTreeFromString = (str) => {
    var i = 0;
    while (i < str.length - 1) {
      // trim whitespace
      if (str[i] === ' ') {
        i++;
      }

      if (str[i] === '(' && str[i + 1] === ')') {
        i += 2;
      }
      if (str[i] === ')') {
        stack.pop();
      }

      if (str[i] === '(' && str[i + 1] !== ')') {
        var currentNode = new Node(str[i + 1]);
        if (!stack.isEmpty()) {
          var parentNode = stack.peek();
          if (parentNode.left !== null) {
            parentNode.right = currentNode;
          } else {
            parentNode.left = currentNode;
          }
        }
        stack.push(currentNode);
      }
      i++;
    }
  }

  buildTreeFromString(str);
  // console.log('tree', tree);
  return stack.peek();

};


//
//            2
//          /   \
//        /       \
//      7          5
//    /   \         \
//   /     \         \
//  2       6        9
//        /   \      /
//       /     \    /
//       5     11  4


var tree1 = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))";
var tree1ExpectedOutput = [5, 11, 4];
var tree1Actual = treeBottom(tree1);
console.log('tree1', tree1Actual);

var tree2 = '(2 (1 () ()) (3 () ())';
var tree2ExpectedOutput = [2, 3];
var tree2Actual = treeBottom(tree2);
// console.log('tree2', tree2Actual);

var tree3 = '(1 () ())'
var tree3ExpectedOutput = [1];
// var tree3Actual = treeBottom(tree3);
// console.log('tree3', tree3Actual);


// tree = tree.replace(/\)|\)/g, "]");
  // var testStr = '(1)'
  // console.log(testStr.slice(2))

// If the string starts with '(', it starts a tree, following 'A' is the root
// If it is, e.g., 'B', that is a leaf
// If it is '(', recurse
// If next is ')', close off the node started above