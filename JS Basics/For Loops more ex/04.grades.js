function grades(input) {
  let index = 0;
  const studentsNum = Number(input[index++]);
  
  let topStudentsCounter = 0;
  let goodStudentsCounter = 0;
  let midStudentsCounter = 0;
  let failStudentsCounter = 0;
  let avgGrade = 0;

  for(let i = 1; i <= studentsNum; i++) {
    let grade = Number(input[index++]);

    if(grade >= 2 && grade <= 2.99) {
      failStudentsCounter++;
    } else if(grade >= 3 && grade <= 3.99) {
      midStudentsCounter++;
    } else if(grade >= 4 && grade <= 4.99) {
      goodStudentsCounter++;
    } else if(grade >= 5) {
      topStudentsCounter++;
    }
    avgGrade += grade / studentsNum;
  }
  
  let topStudentsProc = topStudentsCounter / studentsNum * 100;
  let goodStudentsProc = goodStudentsCounter / studentsNum * 100;
  let midStudentsProc = midStudentsCounter / studentsNum * 100;
  let failStudentsProc = failStudentsCounter / studentsNum * 100;
  console.log(`Top students: ${topStudentsProc.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${goodStudentsProc.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${midStudentsProc.toFixed(2)}%`);
  console.log(`Fail: ${failStudentsProc.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}
grades(["6", "2", "3", "4", "5", "6", "2.2"]);