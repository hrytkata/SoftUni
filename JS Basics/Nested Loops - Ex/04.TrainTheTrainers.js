function trainTheTrainers(input) {
  let index = 0;
  let countOfJury = Number(input[index++]);
  let command = input[index++];
  let countOfGrades = 0;
  let avgGrade = 0;

  while(command !== "Finish") {
    countOfGrades++;
    let presentationName = command;
    let tempAvgGrade = 0;
    for(let i = 0; i < countOfJury; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempAvgGrade += tempGrade;
    }
    tempAvgGrade = tempAvgGrade / countOfJury;
    let presetationRes = `${presentationName} - ${tempAvgGrade.toFixed(2)}.`
    console.log(presetationRes);
    avgGrade += tempAvgGrade;
    command = input[index++]
  }
  avgGrade = avgGrade / countOfGrades;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
;
