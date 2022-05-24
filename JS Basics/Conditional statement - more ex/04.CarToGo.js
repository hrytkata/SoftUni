function carToGo(input) {
  const budget  = Number(input[0]);
  let season = input[1];

  let carClass = "";
  let carType = "";
  let price = "";
  

  switch(season) {
    case "Summer":
      if (budget <= 100) {
        carClass = "Economy class";
        carType = "Cabrio"
        price = budget * 0.35;
      } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class"
        carType = "Cabrio"
        price = budget * 0.45;
      } break;
    case "Winter":
      if (budget <= 100) {
        carClass = "Economy class";
        carType = "Jeep"
        price = budget * 0.65;
      } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class"
        carType = "Jeep"
        price = budget * 0.80;
      } break;
  }

  if (budget > 500) {
    carClass = "Luxury class"
    carType = "Jeep";
    price = budget * 0.9;
  }

  console.log(`${carClass}`);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(["70.50", "Winter"]);
