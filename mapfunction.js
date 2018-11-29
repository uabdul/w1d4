var words = ["ground", "control", "to", "major", "tom"];



function map(arr, func) {
  var output = [];
  for (element of arr) {
    output.push(func(element));
  }
  console.log(output);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
