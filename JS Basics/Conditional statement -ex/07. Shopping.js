function shopping(input) {
  const singleVideoCardPrice = 250;
  const budget = Number(input[0]);
  const videoCardCount = Number(input[1]);
  const processorsCount = Number(input[2]);
  const ramMemoryCount = Number(input[3]);

  const videoCardsPrice = videoCardCount * singleVideoCardPrice;
  const processorsPrice = videoCardsPrice * 0.35;
  const ramMemoryPrice = videoCardsPrice * 0.1;

  let totalSum =
    videoCardsPrice +
    processorsCount * processorsPrice +
    ramMemoryPrice * ramMemoryCount;

  if (videoCardCount > processorsCount) {
    totalSum *= 0.85;
  }

  const diff = Math.abs(totalSum - budget).toFixed(2);
  if (totalSum <= budget) {
    console.log(`You have ${diff} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);
