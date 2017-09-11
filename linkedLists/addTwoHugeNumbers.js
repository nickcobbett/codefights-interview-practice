class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  add(val) {
    var currentNode = this;

    if (!currentNode.value) {
      this.value = val;
      return this;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(val);

    return this;
  }

  multiAdd(array) {
    array.forEach(val => this.add(val));
    return this;
  }

  traverseList(cb) {
    var currentNode = this;
    while (currentNode) {
      cb(currentNode);
      currentNode = currentNode.next;
    }
  }
}

// end helper testing class and functions


// begin
const traverseList = (node, cb) => {
  var currentNode = node;
  while (currentNode) {
    cb(currentNode);
    currentNode = currentNode.next;
  }
}


function addTwoHugeNumbers(a, b) {
  var nums1 = [];
  var nums2 = [];
  var sums = [];
  traverseList(a, (node) => nums1.push(node.value));
  traverseList(b, (node) => nums2.push(node.value));

  if (nums1.length > nums2.length) {
    var temp = nums1.slice();
    nums1 = nums2.slice();
    nums2 = temp;
  }


  var prevCarry = 0;
  while (nums1.length) {

    var a = nums1.pop();
    var b = nums2.pop();
    var sum = a + b + prevCarry;

    var str = sum.toString();
    if (str.length > 4) {
      var remainder = str.slice(-4);
      prevCarry = parseInt(str[0]);
      sums.unshift(parseInt(remainder));
    } else {
      prevCarry = 0;
      sums.unshift(sum);
    }
  }

  while (prevCarry && nums2.length) {
    var sum = nums2.pop() + prevCarry;
    var str = sum.toString();
    if (str.length > 4) {
      var remainder = str.slice(-4);
      prevCarry = parseInt(str[0]);
      sums.unshift(parseInt(remainder));
    } else {
      prevCarry = 0;
      sums.unshift(sum);
    }
  }

  if (prevCarry) {
    sums.unshift(prevCarry)
    return sums;
  } else {
    return nums2.concat(sums)
  }
}
//end



var a1 = new Node();
var b1 = new Node();
a1.add(1);
b1.multiAdd([9999, 9999, 9999, 9999, 9999, 9999]);
var test1 = addTwoHugeNumbers(a1, b1)
console.log('test1: ', test1)
