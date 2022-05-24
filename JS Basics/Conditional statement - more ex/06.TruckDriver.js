function truckDriver(input) {
  let season = input[0];
  const kmPerMonth = Number(input[1]);

  let pricePerKm = "";

  if (season === "Spring" || season === "Autumn") {
    if (kmPerMonth <= 5000) {
      pricePerKm = 0.75;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 0.95;
    } 
  } else if (season === "Summer") {
    if (kmPerMonth <= 5000) {
      pricePerKm = 0.90;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 1.1;
    }
  } else if (season === "Winter") {
    if (kmPerMonth < 5000) {
      pricePerKm = 1.05;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 1.25;
    }
  }

  if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
    pricePerKm = 1.45
  }

  let wagePerMonth = pricePerKm * kmPerMonth;
  let wageForSeason = wagePerMonth * 4;
  let wageAfterTax = wageForSeason * 0.9;

  console.log(wageAfterTax.toFixed(2));
}
truckDriver(["Autumn", "8600"]);