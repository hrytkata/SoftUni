function dishwasher(input) {
  let index = 0;
  let detergentBottles = Number(input[index++]);
  let detergentLitters = detergentBottles * 750;

  let washedPlates = 0;
  let washedPots = 0;
  let counter = 1;
  let detergentNeeded = 0;

  while(detergentLitters > 0) {
    let command = input[index++];
    if(command === "End") {
      break;
    }
    
    if(counter % 3 === 0) {
      detergentNeeded += command * 15;
    } else {
      detergentNeeded += command * 5;
    }

    if(detergentNeeded > detergentLitters) {
      break;
    }

    if(counter % 3 === 0) {
      washedPots += Number(command);
    } else {
      washedPlates += Number(command);
    }
    counter++;
    
  } 
  let detergentDiff = detergentNeeded - detergentLitters;

  if(detergentNeeded > detergentLitters) {
    console.log(`Not enough detergent, ${Math.abs(detergentDiff)} ml. more necessary!`);
  } else {
    console.log("Detergent was enough!");
    console.log(`${washedPlates} dishes and ${washedPots} pots were washed.`);
    console.log(`Leftover detergent ${Math.abs(detergentDiff)} ml.`);
  }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
// (["2", "53", "65", "55", "End"]);
// (["1", "10", "15", "10", "12", "13", "30"])
