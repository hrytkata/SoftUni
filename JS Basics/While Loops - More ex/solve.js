function easterEggs(input) {
  let index = 0;
  let playerOneEggs = Number(input[index++]);
  let playerTwoEggs = Number(input[index++]);

  let command = input[index++];

  while(command !== "End of battle") {
    if(command === "one") {
      playerTwoEggs--;
    } else {
      playerOneEggs--;
    }

    if(playerOneEggs === 0) {
      console.log(`Player one is out of eggs. ${playerOneEggs} eggs left.`);
      break;
    } else if (playerTwoEggs === 0) {
      console.log(`Player two is out of eggs. ${playerTwoEggs} eggs left.`);
      break;
    }

    
    command = input[index++];
  }
  
  if(command === "End of battle") {
    console.log(`Player one is out of eggs. ${playerOneEggs} eggs left.`);
    console.log(`Player two is out of eggs. ${playerTwoEggs} eggs left.`);
  }
}
easterEggs(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);