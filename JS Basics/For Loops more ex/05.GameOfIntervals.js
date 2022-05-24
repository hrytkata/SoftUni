function gameOfIntervals(input) {
  let index = 0;
  const gameMoves = Number(input[index++]);

  let zeroTo9Counter = 0;
  let tenTo19Counter = 0;
  let twentyTo29Counter = 0;
  let thirtyTo39Counter = 0;
  let forthyTo49Counter = 0;
  let invalitNumCounter = 0;
  let points = 0;

  for(let i = 1; i <= gameMoves; i++) {
    let num = Number(input[index++]);

    if(num >= 0 && num <= 9) {
      zeroTo9Counter++;
      points += num * 0.20;
    } else if(num > 9 && num <= 19) {
      tenTo19Counter++;
      points += num * 0.30;
    } else if(num > 19 && num <= 29) {
      twentyTo29Counter++;
      points += num * 0.40;
    } else if(num > 29 && num <= 39) {
      thirtyTo39Counter++;
      points += 50;
    } else if(num > 39 && num <= 50) {
      forthyTo49Counter++;
      points += 100;
    } else if(num < 0 || num > 50) {
      points /= 2;
      invalitNumCounter++;
    }
  }
  let zeroTo9Proc = zeroTo9Counter / gameMoves * 100;
  let tenTo19Proc = tenTo19Counter / gameMoves * 100;
  let twentyTo29Proc = twentyTo29Counter / gameMoves * 100;
  let thirtyTo39Proc = thirtyTo39Counter / gameMoves * 100;
  let forthyTo49Proc = forthyTo49Counter / gameMoves * 100;
  let invalitNumProc = invalitNumCounter / gameMoves * 100;
  console.log(`${points.toFixed(2)}`);
  console.log(`From 0 to 9: ${zeroTo9Proc.toFixed(2)}%`);
  console.log(`From 10 to 19: ${tenTo19Proc.toFixed(2)}%`);
  console.log(`From 20 to 29: ${twentyTo29Proc.toFixed(2)}%`);
  console.log(`From 30 to 39: ${thirtyTo39Proc.toFixed(2)}%`);
  console.log(`From 40 to 50: ${forthyTo49Proc.toFixed(2)}%`);
  console.log(`Invalid numbers: ${invalitNumProc.toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);