function tennisRanklist(input) {
  let index = 0;

  let tournamentCount = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let tempPoints = 0;
  let winCounter = 0;

  for (let i = 0; i < tournamentCount; i++) {
    let score = input[index];
    index++;

    switch (score) {
      case "W":
        tempPoints += 2000;
        winCounter++;
        break;
      case "F":
        tempPoints += 1200;
        break;
      case "SF":
        tempPoints += 720;
        break;
    }
  }

  let finalPoints = tempPoints + startPoints;
  let avgPoints = Math.floor(tempPoints / tournamentCount);
  let winGameP = winCounter / tournamentCount * 100
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(`${winGameP.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
