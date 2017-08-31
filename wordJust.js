function textJustification(words, l) {
  var justified = [];
  var i = 0;

  var word = words[i];
  var nextWord = words[i + 1];
  while (i < words.length) {
    var k = i;
    var line = words[i];
    // console.log(line.length + words[k + 1].length)
    while ((k < words.length - 1) && line.length + words[k + 1].length <= l) {
      // console.log(k)
      line += (' ' + words[k + 1]);
      k++;
    }
    justified.push(line);

    if (i === k) {
      i++;
    } else {
      i = k + 1;
    }
  }
  return justified;
}


var words1 = ["This", "is", "an", "example", "of", "text", "justification."];
var test1 = console.log(textJustification(words1, 16))