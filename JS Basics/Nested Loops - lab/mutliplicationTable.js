function multiplicationTable(input) {
  let flag = false;
  for(let x = 1; x <= 10; x++) {
    for(let y = 1; y <= 10; y++) {
      flag = true;
      if(y === 4) {
        break;
      }
      console.log(`${x} * ${y} = ${x * y}`);
    }
  }
}
multiplicationTable();