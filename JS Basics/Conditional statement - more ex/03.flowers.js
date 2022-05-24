function flowers(input) {
  const chrysanthemumCount = Number(input[0]);
  const rosesCount = Number(input[1]);
  const tulipCount = Number(input[2]);
  let season = input[3];
  let holiday = input[4];

  let chrysanthemumSinglePrice = "";
  let rosesSinglePrice = "";
  let tulipSinglePrice = "";
  const totalFlowersCount = chrysanthemumCount + rosesCount + tulipCount;
  const bunchOfFlowersArrangement = 2;

  if (season === "Spring" || season === "Summer") {
    chrysanthemumSinglePrice = 2;
    rosesSinglePrice = 4.1;
    tulipSinglePrice = 2.5;
  } else if (season === "Autumn" || season === "Winter") {
    chrysanthemumSinglePrice = 3.75;
    rosesSinglePrice = 4.5;
    tulipSinglePrice = 4.15;
  }

  const finalPrice =
    chrysanthemumSinglePrice * chrysanthemumCount +
    rosesSinglePrice * rosesCount +
    tulipSinglePrice * tulipCount;

  if (holiday === "Y") {
    finalPrice *= 1.15;
  }

  if (tulipCount > 7 && season === "Spring") {
    finalPrice *= 0.95;
  } else if (rosesCount >= 10 && season === "Winter") {
    finalPrice *= 0.9;
  }

  if (totalFlowersCount > 20) {
    finalPrice *= 0.8;
  }

  finalPrice = finalPrice + bunchOfFlowersArrangement;

  console.log(finalPrice.toFixed(2));
}

flowers(["3", "10", "9", "Winter", "N"]);
