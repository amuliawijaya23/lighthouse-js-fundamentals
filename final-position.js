const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  let positionX = 0;
  let positionY = 0;
  for (move of moves) {
    if (move === 'north') {
      positionY += 1;
  } else if (move === 'south') {
    positionY -= 1;
  } else if (move === 'west') {
    positionX -= 1;
  } else {
    positionX += 1;
  }
  }
  return [positionX,positionY];
}
console.log(finalPosition(moves));