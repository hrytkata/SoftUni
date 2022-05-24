function deerOfSanta(input) {
  let daysAway = Number(input[0]);
  let foodLeftInKilos = Number(input[1]);
  let firstDeerFood = Number(input[2]);
  let secondDeerFood = Number(input[3]);
  let thirdDeerFood = Number(input[4]);

  let foodNeededFirstDeer = daysAway * firstDeerFood;
  let foodNeededSecondDeer = daysAway * secondDeerFood;
  let foodNeededThirdDeer = daysAway * thirdDeerFood;

  let finalAmountNeededFood = foodNeededFirstDeer + foodNeededSecondDeer + foodNeededThirdDeer;
  let foodDiff = Math.abs(finalAmountNeededFood - foodLeftInKilos);

  if(foodLeftInKilos >= finalAmountNeededFood) {
    console.log(`${Math.floor(foodDiff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(foodDiff)} more kilos of food are needed.`);
  }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"]);