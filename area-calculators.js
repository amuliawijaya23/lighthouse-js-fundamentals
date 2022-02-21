function calculateRectangleArea(length, width){
  const rectangleArea = length * width;
  let inValid;
  if (length > 0 && width > 0) {
    return rectangleArea;
  } else {
    return inValid;
  }
}
function calculateTriangleArea(base, height){
  const triangleArea = (base * height) / 2; 
  let notValid;
  if (base > 0 && height > 0) {
    return triangleArea;
  } else {
    return notValid;
  }
}
function calculateCircleArea(radius){
  const circleArea = Math.PI * Math.pow(radius, 2); 
  let error;
  if (radius > 0) {
    return circleArea;
  } else {
    return error;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined