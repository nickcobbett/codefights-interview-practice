function swapLexOrder(str, pairs) {
  var maxStr = str;
  var swaps = {};
  swaps[str] = 1;
  var keepSearching = true;
  // while swap is still yielding new results go through all the pairs
  // swap letters and add to swaps and compare to maxStr
  const swapLtrs = (str, pair) => {
    str = str.split('');
    var a = pair[0] - 1;
    var b = pair[1] - 1;
    var temp = str[a];
    str[a] = str[b];
    str[b] = temp;
    return str.join('');
  }
  while (keepSearching) {
    keepSearching = false;
    pairs.forEach(pair => {
      str = swapLtrs(str, pair);
      if (str > maxStr) maxStr = str;
      if (!swaps[str]) keepSearching = true;
      swaps[str] = 1;
    })

  }

  console.log('swaps', swaps);
  return maxStr;
}


var str = "abdc";
var pairs = [[1,4], [3,4]];
console.log('test1: ', swapLexOrder(str, pairs)); // 'dbca'