function password(input) {
  let index = 0;
  let username = input[index++];
  let pass = input[index++];
  let tempPass = input[index++];
  while(pass !== tempPass) {
    tempPass = input[index++];
  }
  console.log(`Welcome ${username}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
