const temperature = -50;

if (temperature < 0) {
  console.log("Make sure you wear a scarf!");
} else if (temperature < 15) {
  console.log("Wear something thick!");
} else {
  console.log("Take out your summer clothings!");
}

console.log("Now you're ready to go outside!")

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

