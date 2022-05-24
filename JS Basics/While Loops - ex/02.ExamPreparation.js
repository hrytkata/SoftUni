function examPreparation(input) {
  let countOfBadGrades = input[0];
  let index = 1;
  let command = input[index]; 
  let numberOfProblems = 0;
  let sumGrades = 0;
  let numOfBadGrades = 0;
  let lastProblemName = "";
 
  while (command !== "Enough") {
    numberOfProblems++;
    index++;
    let currentGrades = Number(input[index]);
    sumGrades += currentGrades;
    if (currentGrades <= 4) {
      numOfBadGrades++;
    }
    if (numOfBadGrades >= countOfBadGrades) {
      console.log(`You need a break, ${numOfBadGrades} poor grades.`);
      break;
    }
    index++;
    command = input[index];
  }
 
  if (command === "Enough") {
    let avgGrade = (sumGrades / numberOfProblems).toFixed(2);
    console.log(`Average score: ${avgGrade}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    index -= 2;
    let command = input[index];
    console.log(`Last problem: ${command}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
