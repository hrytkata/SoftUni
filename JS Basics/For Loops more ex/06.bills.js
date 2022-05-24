function bills(input) {
  let index = 0;
  let months = Number(input[index++]);
  let avgWaterBill = 0;
  let avgInternetBill = 0;
  let avgElBill = 0;

  for(let i = 1; i <= months; i++) {
    let electricityBill = Number(input[index++]);
    let waterBill = 20;
    let internetBill = 15;
    avgWaterBill += waterBill;
    avgInternetBill += internetBill;
    avgElBill += electricityBill;
  }

  let wholePeriodBills = avgElBill + avgInternetBill + avgWaterBill;
  others = wholePeriodBills * 0.2;

  let otherExpenses = wholePeriodBills + others;
  let avgMonthlyBills = (wholePeriodBills + otherExpenses) / months;
  
  console.log(`Electricity: ${avgElBill.toFixed(2)} lv`);
  console.log(`Water: ${avgWaterBill.toFixed(2)} lv`);
  console.log(`Internet: ${avgInternetBill.toFixed(2)} lv`);
  console.log(`Other: ${otherExpenses.toFixed(2)} lv`);
  console.log(`Average: ${avgMonthlyBills.toFixed(2)} lv`);
}
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);