function avgNumber(input) {
  let num = Number(input[0]);
  let index = 1;
  let sum = 0;

  for(let i = 1; i <= num; i++){
    sum += Number(input[index++]);
  }
    sum /= num;
    console.log(sum.toFixed(2));
}
avgNumber(["4", "3", "2", "4", "2"]);