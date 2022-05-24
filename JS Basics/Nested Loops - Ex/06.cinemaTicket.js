function cinemaTickets(input) {
  let index = 0;
  let inputLine = input[index];
  let countStandartTickets = 0;
  let countKidTickets = 0;
  let countStudentTickets = 0;

  while(inputLine !== "Finish") {
    let movieName = inputLine
    index++;
    let allTickets = Number(input[index++]);
    let freeSpaceInCinema = allTickets;
    let ticketType = input[index++];
    while(ticketType !== "End") {
      switch(ticketType) {
        case "standard":
          countStandartTickets++;
          break;
        case "kid":
          countKidTickets++;
          break;
        case "student":
          countStudentTickets++;
          break;  
      }
      freeSpaceInCinema--;
      if(freeSpaceInCinema === 0) {
        break;
      }
      ticketType = input[index++];
    }
    let boughtTickets = allTickets - freeSpaceInCinema;
    let procentageFull = boughtTickets / allTickets * 100;
    console.log(`${movieName} - ${procentageFull.toFixed(2)}% full.`);
    inputLine = input[index];
  }
  let allBoughtTickects = countKidTickets + countStudentTickets + countStandartTickets;
  console.log(`Total tickets: ${allBoughtTickects}`);
  console.log(`${(countStudentTickets / allBoughtTickects * 100).toFixed(2)}% student tickets.`);
  console.log(`${(countStandartTickets / allBoughtTickects * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(countKidTickets / allBoughtTickects * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student",
"student",
"Finish"]);