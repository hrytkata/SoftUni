function excursion(input) {
  let peopleCount = Number(input[0]);
  let nights = Number(input[1]);
  let goCards = Number(input[2]);
  let museumTickets = Number(input[3]);

  let onePersonExpences = nights * 20 + goCards * 1.6 + museumTickets * 6;
  let wholeGroupPrice = onePersonExpences * peopleCount;
  let twentyProExtra = wholeGroupPrice * 0.25;
  let finalPrice = wholeGroupPrice + twentyProExtra;

  console.log(finalPrice.toFixed(2));

}
excursion(["131",
"9",
"33",
"46"]);