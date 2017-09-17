function swapLexOrder(str, pairs) {
  // while swap is still yielding new results go through all the pairs
  // swap letters and add to swaps and compare to maxStr
  var maxStr = str;
  var swaps = {};
  swaps[str] = 1;

  const swapLtrs = (str, pair) => {
    str = str.split('');
    var a = pair[0] - 1;
    var b = pair[1] - 1;
    var temp = str[a];
    str[a] = str[b];
    str[b] = temp;
    return str.join('');
  }

  var keepSearching = true;
  while (keepSearching) {
    keepSearching = false;
    pairs.forEach(pair => {
      for (var key in swaps) {
        str = swapLtrs(key, pair);
        if (str > maxStr) maxStr = str;
        if (!swaps[str]) keepSearching = true;
        swaps[str] = 1;
      }
    })
  }

  // console.log('swaps', swaps);
  console.log('maxStr', maxStr);
  return maxStr;
}


var str = "abdc";
var pairs = [[1,4], [3,4]];
console.log('test1: ', swapLexOrder(str, pairs) === 'dbca'); // 'dbca'
str = "acxrabdz"
pairs = [[1,3], [6,8], [3,8], [2,7]];
console.log('test3: ', swapLexOrder(str, pairs) === 'zdxrabca'); // 'zdxrabca'

str = "fixmfbhyutghwbyezkveyameoamqoi";
pairs = [[8,5],
 [10,8],
 [4,18],
 [20,12],
 [5,2],
 [17,2],
 [13,25],
 [29,12],
 [22,2],
 [17,11]];
console.log('test6: ', swapLexOrder(str, pairs) === 'fzxmybhtuigowbyefkvhyameoamqei'); // 'fzxmybhtuigowbyefkvhyameoamqei'