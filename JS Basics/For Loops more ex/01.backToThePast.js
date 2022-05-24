function backToThePast(input) {
  let index = 0;
  let heritage = Number(input[index]);
  index++;
  const year = Number(input[index]);
  index++;

  let ivanAge = 18;
  let startingYear = 1800;
  let currentAge = 0;

  for(let i = 1800; i <= year; i++) {
    currentAge = ivanAge + (i - startingYear);

    if(i % 2 === 0) {
      heritage -= 12000;
    } else {
      heritage -= 12000 + (currentAge * 50);
    }
  }

  if(heritage >= 0) {
    console.log(`Yes! He will live a carefree life and will have ${heritage.toFixed(2)} dollars left.`);
  } else {
    console.log(`He will need ${Math.abs(heritage).toFixed(2)} dollars to survive.`);
  }
}
backToThePast(["50000", "1802"]);