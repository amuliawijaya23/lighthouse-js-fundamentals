function laugh(num) {
  let sound = '';
  for (x = 1; x <= num; x++) {
    sound = sound + 'ha';
  }
  sound = sound + '!';
  return sound;
}
console.log(laugh(3));