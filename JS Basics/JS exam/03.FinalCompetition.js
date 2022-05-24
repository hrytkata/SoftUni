function finalCompetition(input) {
  let dancers = Number(input[0]);
  let scores = Number(input[1]);
  let season = input[2];
  let place = input[3];

  let sum = 0;
  let abroadSumPro = scores * dancers * 0.5;

  if(place === "Bulgaria") {
    sum = scores * dancers;
    if(season === "summer") {
      sum *= 0.95;
    } else if(season === "winter") {
      sum *= 0.92;
    }
  } else if (place === "Abroad") {
    sum = scores * dancers + abroadSumPro;
    if(season === "summer") {
      sum *= 0.9;
    } else if (season === "winter") {
      sum *= 0.85;
    }
  }
  
  let charitySum = sum * 0.75;
  let moneyLeft = sum - charitySum;
  let moneyPerDancer = moneyLeft / dancers;

  console.log(`Charity - ${charitySum.toFixed(2)}`);
  console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"]);