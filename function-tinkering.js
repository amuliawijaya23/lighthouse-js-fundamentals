function makeLine(length) {
  let line = '';
  for (x = 1; x <= length; x++) {
    line += 'x ';
  }
  line = line + '\n';
  return line
}

function buildTriangle(length) {
  let triangle = '';
  for (y = 1; y <= length; y++) {
    triangle += makeLine(y);
  }
  return triangle;
}
console.log(buildTriangle(10));