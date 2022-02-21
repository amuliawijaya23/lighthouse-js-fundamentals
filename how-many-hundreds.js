const howManyHundreds = function(num) {
  let remainder = num % 100;
  return (num - remainder) / 100;
}