function vacation(input) {
  let excursionPrice = Number(input[0]);
  let money = Number(input[1]);
  let index = 2;
  let daysSpending = 0;
  let dayCounter = 0;

  while(money < excursionPrice) {
    let action = input[index];
    index++;
    let amountOfMoney = Number(input[index]);
    dayCounter++;
    switch(action) {
      case "spend":
        money -= amountOfMoney;
        if(money < 0) {
          money = 0;
        }
        daysSpending++;
        break;
        case "save":
          money += amountOfMoney;
          daysSpending = 0;
          break;
    }
    if(daysSpending >= 5) {
      console.log("You can't save the money.");
      console.log(`${dayCounter}`);
      break;
    }
    index++;
  }
  if(money >= excursionPrice) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);