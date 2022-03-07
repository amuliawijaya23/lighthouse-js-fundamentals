const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let sphVol = (4 / 3) * PI * (Math.pow(radius, 3));
  return sphVol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let conVol = PI * (Math.pow(radius, 2)) * (height / 3);
  return conVol;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let prisVol = height * width * depth;
  return prisVol;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let objectVolume = 0;
  for (let shape of solids) {
    if (shape.type === 'sphere') {
      objectVolume += sphereVolume(shape.radius);
    } else if (shape.type === 'cone') {
      objectVolume += coneVolume(shape.radius, shape.height);
    } else {
      objectVolume += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return objectVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);