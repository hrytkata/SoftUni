function bikeRace(input) {
  const juniors = Number(input[0]);
  const seniors = Number(input[1]);
  const trackType = input[2];
  let participantsCount = juniors + seniors;

  let juniorsTax = "";
  let seniorsTax = "";

  if (trackType === "trail") {
    juniorsTax = 5.5;
    seniorsTax = 7;
  } else if (trackType === "cross-country") {
    juniorsTax = 8;
    seniorsTax = 9.5;
  } else if (trackType === "downhill") {
    juniorsTax = 12.25;
    seniorsTax = 13.75;
  } else if (trackType === "road") {
    juniorsTax = 20;
    seniorsTax = 21.5;
  }

  if (trackType === "cross-country" && participantsCount >= 50) {
    juniorsTax *= 0.75;
    seniorsTax *= 0.75;
  }

  let earnedSum = juniors * juniorsTax + seniors * seniorsTax;
  let expenses = earnedSum * 0.05;

  const sumEarnedForCharity = earnedSum - expenses;
  console.log(sumEarnedForCharity.toFixed(2));
}
bikeRace(["30", "25", "cross-country"]);
