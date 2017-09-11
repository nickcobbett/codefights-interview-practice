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

  console.log(nums2)
  console.log(sums)

  return nums2.concat(sums)
}

