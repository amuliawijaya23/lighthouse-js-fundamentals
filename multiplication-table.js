const multiplicationTable = function(maxValue) {
  let result = 0;
  let output = [];
  let table = ' ';
  for (var i = 1; i <= maxValue; i++) {
    for (var j = 1; j <= maxValue; j ++) {
      result = i * j;
      output.push(result);
    }
    output.push('\n');
  }
  table += output.join(' ');
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));