const whereCanIPark = function (spots, vehicle) {
  let spotX;
  let spotY;
  for (let x = 0; x < spots.length - 1; x++){
    for( let y = 0; y < spots[x].length -1; y++){
    if((spots[x][y] === 'R')  && (vehicle === 'regular')){
     spotX = x;
     spotY = y;
     return [x,y];
    } else if ((spots[x][y] === 'R' || spots[x][y] === 'S') && (vehicle === 'small')){
      spotX = x;
      spotY = y;
      return [x,y];
    } else if ((spots[x][y] === 'R' || spots[x][y] === 'S' || spots[x][y] === 'M') && (vehicle === 'motorcycle')){
      spotX = x;
      spotY = y;
      return [spotX,spotY];
    }
  }
  }
  return false;
  };

  console.log(whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
  ));
  
  console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  ));
  
  console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  ))