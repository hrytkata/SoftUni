function moving(input) {
  let index = 0;
  let freeSpaceWidth = Number(input[index++]);
  let freeSpaceLength = Number(input[index++]);
  let freeSpaceHeight = Number(input[index++]);
  let freeSpace = freeSpaceHeight * freeSpaceLength * freeSpaceWidth;
  let command = "";
  let totalBoxes = 0;

  while(freeSpace > totalBoxes) {
    command = input[index];
    index++;
    if(command === "Done"){
      break;
    }
    let numberOfBoxes = Number(command);
    totalBoxes += numberOfBoxes;
  }
  if(totalBoxes > freeSpace) {
    let diff = (totalBoxes - freeSpace);
    console.log(`No more free space! You need ${diff} Cubic meters more.`);
  } else {
    let left = freeSpace - totalBoxes;
    console.log(`${left} Cubic meters left.`);
  }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

;
