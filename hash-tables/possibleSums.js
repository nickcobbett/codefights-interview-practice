function possibleSums(coins, quantity) {
  var quantityHash = {};
  var sums = {};
  var count = 0;

  for (var i = 0; i < coins.length; i++) {
    var key = quantity[i].toString();
    var value = coins[i];
    if (!quantityHash[key]) {
      quantityHash[key] = [];
    }
    // if (!sums[value]) {
    //   sums[value.toString()] = value;
    // }
    quantityHash[key].push(value);
  }
  console.log('quantityHash: ', quantityHash);
  // build sums
  for (var key in quantityHash) {
    var quantity = parseInt(key); //
    var coins = quantityHash[key];
    var i = 1; // while i <= quant
    while (i <= quantity) {
      coins.forEach(coin => {
        console.log('coin', coin )
        var sumKey = coin.toString();

        // if coin doesnt exist in sums then add it
        if (!sums[sumKey]) {
          sums[sumKey] = coin;
          count++;
        }
        // then loop through all sums and each coin to coin and add to sums if doesnt exist
        for (var key in sums) {
          if (key !== sumKey) {
            var sum = sums[key] + coin;
            var sumStr = sum.toString();
            if (!sums[sumStr]) {
              sums[sumStr] = sum;
              count++;
            }
          }
        }
      })
      i++;
    }
  }

  console.log('sums', sums)
  return count
}

var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log('test1: ', possibleSums(coins, quantity)); // 9



coins = [10, 50, 100, 500]
quantity = [5, 3, 2, 2]
// console.log('test2: ', possibleSums(coins, quantity)); // 122


coins = [1, 2]
quantity = [50000, 2]
// console.log('test5: ', possibleSums(coins, quantity)); // 50004