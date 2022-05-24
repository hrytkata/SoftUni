function sumOfNumbers(input) {
  let textNumb = "" + input[0];
  let sum = 0;

  for(let i = 0; i < textNumb.length; i++) {
    let num = Number(textNumb[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["12345"]);