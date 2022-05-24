function reportSystem(input) {
  let index = 0;
  let targetSum = Number(input[index++]);
  let cashSales = 0;
  let creditCardSales = 0;
  let totalSales = 0;
  let command = input[index++];
  let indexCounter = 0;
  let peopleCashCount = 0;
  let peopleCardCount = 0;

  while(targetSum > totalSales) {
    let sales = Number(command);
    indexCounter++;
    if(command == "End") {
      console.log("Failed to collect required money for charity.");
      return;
    }
    if(indexCounter % 2 == 0) {
      if(sales < 10) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        creditCardSales += sales;
        totalSales += sales;
        peopleCardCount++;
      }
    } else {
      if(sales > 100) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        cashSales += sales;
        totalSales += sales;
        peopleCashCount++;
      }
    }
    command = input[index++];
  }

  let avgCcSales = creditCardSales / peopleCardCount;
  let avgCashSales = cashSales / peopleCashCount;
  console.log(`Average CS: ${avgCashSales.toFixed(2)}`);
  console.log(`Average CC: ${avgCcSales.toFixed(2)}`);
}
reportSystem(["600", "86", "150", "98", "227", "End"]);
