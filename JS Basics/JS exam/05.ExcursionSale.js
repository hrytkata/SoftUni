function excursionSale(input) {
  let index = 0;
  let seaExcursion = Number(input[index++]);
  let mountainExcursion = Number(input[index++]);

  let command = input[index++];
  let profit = 0;

  while(command !== "Stop") {
    if(command === "sea") {
      if(seaExcursion <= 0) {
        profit = profit;
        seaExcursion--;
      } else {
        profit += 680;
        seaExcursion--;

      }
    } else if (command === "mountain") {
      if(mountainExcursion <= 0) {
        profit = profit;
        mountainExcursion--;
      } else {
        profit += 499;
        mountainExcursion--;

      }
    }
    command = input[index++];
    if(seaExcursion <= 0 && mountainExcursion <= 0) {
      console.log("Good job! Everything is sold." );
      break;
    }
  }
  console.log(`Profit: ${profit} leva.`);
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);