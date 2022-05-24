function workOut(input) {
  const days = Number(input[0]);
  const kilometersFirtsDay = Number(input[1]);
  let totalKilometers = kilometersFirtsDay;
  let total = kilometersFirtsDay;
  for (let i = 2; i <= days + 1; i++) {
    totalKilometers += (totalKilometers * Number(input[i])) / 100;
    total += totalKilometers;
  }
  if (total >= 1000) {
    console.log(
      "You've done a great job running " +
        Math.ceil(total - 1000) +
        " more   kilometers!"
    );
  } else {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - total
      )} more kilometers`
    );
  }
}
workOut(["5",
"30",
"10",
"15",
"20",
"5",
"12"]);