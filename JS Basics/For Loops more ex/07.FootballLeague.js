function footballLeague(input) {
  let index = 0;
  const stadiumCapacity = Number(input[index++]);
  const fans = Number(input[index++]);
  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;

  for(let i = 1; i <= fans; i++) {
    let sectors = input[index++];
    if(sectors == "A") {
      sectorA++;
    } else if (sectors == "B") {
      sectorB++;
    } else if (sectors == "V") { 
      sectorV++;
    } else if (sectors == "G") {
      sectorG++;
    }
  }
  
  let sectorAPro = sectorA / fans * 100;
  let sectorBPro = sectorB / fans * 100;
  let sectorVPro = sectorV / fans * 100;
  let sectorGPro = sectorG / fans * 100;
  let fansPro = fans / stadiumCapacity * 100;

  console.log(sectorAPro.toFixed(2) + "%");
  console.log(sectorBPro.toFixed(2) + "%");
  console.log(sectorVPro.toFixed(2) + "%");
  console.log(sectorGPro.toFixed(2) + "%");
  console.log(fansPro.toFixed(2) + "%");
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);