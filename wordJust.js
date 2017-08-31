function textJustification(words, l) {
  var justified = [];
  var i = 0;

  var word = words[i];
  var nextWord = words[i + 1];
  while (i < words.length) {
    var k = i;
    var line = words[i];
    while ((k < words.length - 1) && line.length + words[k + 1].length <= l) {
      line += (' ' + words[k + 1]);
      k++;
    }
    var lineLen = line.length;
    var diff = l - lineLen;
    var wordsInLine = line.split(' ');
    var j = 0;
    while (diff > 0) {
      wordsInLine[j] += ' ';
      diff--;
      if (j === wordsInLine.length - 2) {
        j = 0;
      } else if (wordsInLine.length === 1) {
        j = 0;
      } else {
        j++;
      }
    }
    // var justifiedLine = '';
    // wordsInLine.forEach(word => justifiedLine += word);
    justified.push(wordsInLine.join(' '));

    if (i === k) {
      i++;
    } else {
      i = k + 1;
    }
  }

  if (justified.length === 1) {
    console.log('split', justified[0].split(','))
  }

  return justified;
}


var words1 = ["This", "is", "an", "example", "of", "text", "justification."];
var twoWords = ["Two", "words."];
// var test1 = console.log(textJustification(words1, 16))
var test2 = console.log(textJustification(twoWords, 11));