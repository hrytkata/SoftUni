function logsitic(input) {
  let index = 0;
  const cargoNum = Number(input[index++]);
  let pricePerTon = 0;
  let cargoFinalWeight = 0;

  let vanTotalCargoWeight = 0;
  let truckTotalCargoWeight = 0;
  let trainTotalCargoWeight = 0;

  const vanPricePerTon = 200;
  const truckPricePerTon = 175;
  const trainPricePerTon = 120;


  for(let i = 1; i <= cargoNum; i++) {
    let cargoWeight = Number(input[index++]);

    if(cargoWeight <= 3) {
      vanTotalCargoWeight += cargoWeight;
    } else if (cargoWeight > 3 && cargoWeight <= 11) {
      truckTotalCargoWeight += cargoWeight;
    } else {
      trainTotalCargoWeight += cargoWeight;
    }

    cargoFinalWeight += cargoWeight;
  }

  let avgPrice = (vanTotalCargoWeight * vanPricePerTon + truckTotalCargoWeight * truckPricePerTon + trainTotalCargoWeight * trainPricePerTon) / cargoFinalWeight;
  let vanTransportedCargoP = vanTotalCargoWeight / cargoFinalWeight * 100;
  let truckTransportedCargoP = truckTotalCargoWeight / cargoFinalWeight * 100;
  let trainTransportedCargoP = trainTotalCargoWeight / cargoFinalWeight * 100;

  console.log(avgPrice.toFixed(2));
  console.log(vanTransportedCargoP.toFixed(2) + "%");
  console.log(truckTransportedCargoP.toFixed(2) + "%");
  console.log(trainTransportedCargoP.toFixed(2) + "%");
}
logsitic(["5", "2", "10", "20", "1", "7"]);