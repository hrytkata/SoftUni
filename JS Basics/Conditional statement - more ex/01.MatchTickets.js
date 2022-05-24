function matchTickets(input) {
  const budget = Number(input[0]);
  const type = input[1];
  let peopleCount = Number(input[2]);
  let ticketPrice = "";
  let transportPrice = "";

  if (type === "Normal") {
    ticketPrice = 249.99;
  } else if (type === "VIP") {
    ticketPrice = 499.99;
  }

  if (peopleCount < 5) {
    transportPrice = budget * 0.75;
  } else if (peopleCount >= 5 && peopleCount < 10) {
    transportPrice = budget * 0.6;
  } else if (peopleCount >= 10 && peopleCount < 25) {
    transportPrice = budget * 0.5;
  } else if (peopleCount >= 25 && peopleCount < 50) {
    transportPrice = budget * 0.4;
  } else {
    transportPrice = budget * 0.25;
  }

  const moneyLeftAfterTransport = budget - transportPrice;
  let moneyForTickets = ticketPrice * peopleCount;
  let diff = Math.abs(budget - transportPrice - moneyForTickets);

  if (moneyLeftAfterTransport >= moneyForTickets) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
matchTickets(["30000", "VIP", "49"]);
