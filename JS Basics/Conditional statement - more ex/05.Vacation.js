function vacation(input) {
  const budget = Number(input[0]);
  let season = input[1];
  
  let type = "";
  let destination = "";
  let price = "";

  switch(season) {
    case "Summer":
      if (budget <= 1000) {
        type = "Camp";
        destination = "Alaska";
        price = budget * 0.65;
      } else if (budget > 1000 && budget <= 3000) {
        type = "Hut";
        destination = "Alaska";
        price = budget * 0.8;
      } else {
        type = "Hotel";
        destination = "Alaska";
        price = budget * 0.9;
      } break;
    case "Winter": 
    if (budget <= 1000) {
      type = "Camp";
      destination = "Morocco";
      price = budget * 0.45;
    } else if (budget > 1000 && budget <= 3000) {
      type = "Hut";
      destination = "Morocco";
      price = budget * 0.6;
    } else {
      type = "Hotel";
      destination = "Morocco";
      price = budget * 0.9;
    } break;
  }
  console.log(`${destination} - ${type} - ${price.toFixed(2)}`);
}
vacation(["2543.99", "Winter"]);