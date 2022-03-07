const repeatNumbers = function (data) {
  let num = '';
  let output = [];
  for (var i = 0; i < data.length; i++) {
    for( var j = 0; j < data[i][1]; j++) {
      num += data[i][0];
    }
    output.push(num);
    num = '';
  }
  return output.join(', ')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));