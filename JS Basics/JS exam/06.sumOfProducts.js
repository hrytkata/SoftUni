function sumAndProduct(input) {
  let num = Number(input[0]);
  let counter = 0;

  for(let a = 1; a <= 9; a++) {
    for(let b = 9; b >= a; b--) {
      for(let c = 0; c <= 9; c++) {
        for(let d = 9; d >= c; d--) {
          if((a + b + c + d) === (a * b * c * d) && num % 10 === 5) {
            counter++;
            if(counter == 1) {
              console.log(`${a}${b}${c}${d}`);
            }
          }

          if(Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && num % 3 === 0) {
            counter++;
            if(counter == 1) {
              console.log(`${d}${c}${b}${a}`);
            }
          }
        }
      }
    }
  }
  
  if(counter == 0) {
    console.log("Nothing found");
  }
}
sumAndProduct(["214"]);
           