function cake(input) {
  let index = 0;
  let l = Number(input[index++]);
  let w = Number(input[index++]);
  let cakeSlices = l * w;
  let total = 0;
  while (cakeSlices >= total) {
      let command = input[index];
      index++;
      if (command == "STOP") {
          break;
      }
      let piece = Number(command);
      total += piece;
  }
  if (total > cakeSlices) {
      let need = total - cakeSlices;
      console.log(`No more cake left! You need ${need} pieces more.`);
  } else {
      let left = cakeSlices - total;
      console.log(`${left} pieces are left.`);
  }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
