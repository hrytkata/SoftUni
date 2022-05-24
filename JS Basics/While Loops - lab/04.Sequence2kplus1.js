function sequence2kplus1(input) {
  let num = Number(input[0]);
  let k = 1

  while(num >= k) {
    console.log(k);
    k = k * 2 + 1;
  }
}
sequence2kplus1(["17"]);