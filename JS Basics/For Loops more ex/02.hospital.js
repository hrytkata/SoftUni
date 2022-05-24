function hospital(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  let doctors = 7;
  let treatetPatients = 0;
  let untreatedPatiens = 0;

  for(let i = 1; i <= days; i++) {
    let patients = Number(input[index]);
    index++;

    if(i % 3 === 0) {
      if(untreatedPatiens > treatetPatients) {
        doctors++;
      }
    }
    if(patients < doctors) {
      treatetPatients += patients;
    } else {
      treatetPatients += doctors;
      untreatedPatiens += patients - doctors;
    }
  }
  console.log(`Treated patients: ${treatetPatients}.`);
  console.log(`Untreated patients: ${untreatedPatiens}.`);
}
hospital(["4", "7", "27", "9", "1"]);