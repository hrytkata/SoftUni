function solve(arg1, arg2, arg3, arg4, arg5) {
  let chrysantemums = Number(arg1);
  let roses = Number(arg2);
  let tulips = Number(arg3);
  let season = arg4;
  let day = arg5;
  let priceChrysantemum = 0;
  let priceRoses = 0;
  let priceTulips = 0;
  if (season === "Spring" || season === "Summer") {
    if (chrysantemums > 0) {
      priceChrysantemum = 2.0;
    }
    if (roses > 0) {
      priceRoses = 4.1;
    }
    if (tulips > 0) {
      priceTulips = 2.5;
    }
  }
  if (season === "Autumn" || season === "Winter") {
    if (chrysantemums > 0) {
      priceChrysantemum = 3.75;
    }
    if (roses > 0) {
      priceRoses = 4.5;
    }
    if (tulips > 0) {
      priceTulips = 4.15;
    }
  }

  let totalFlowers = roses + chrysantemums + tulips;
  let totalPrice =
    chrysantemums * priceChrysantemum +
    roses * priceRoses +
    tulips * priceTulips;

  if (season === "Spring" && tulips > 7) {
    totalPrice -= totalPrice * 0.05;
  }
  if (season === "Winter" && roses >= 10) {
    totalPrice -= totalPrice * 0.1;
  }
  if (totalFlowers > 20) {
    totalPrice -= totalPrice * 0.2;
  }
  if (day === "Y") {
    totalPrice += totalPrice * 0.15;
    console.log((totalPrice + 2).toFixed(2));
  } else {
    console.log((totalPrice + 2).toFixed(2));
  }
}
solve(["2", "4", "8", "Spring", "Y"]);
solve(["3", "10", "9", "Winter", "N"]);
