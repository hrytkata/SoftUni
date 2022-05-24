function streamOfLetters(input) {
  let index = 0;
  let command = input[index++];

  let nFound = false;
  let cFound = false;
  let oFound = false;
  let printLine = "";
  let printWord = "";

  while (command !== "End") {
      let firstCondition = command.charCodeAt() >= 65 && command.charCodeAt() <= 90;
      let secondCondition = command.charCodeAt() >= 97 && command.charCodeAt() <= 122;

      if (firstCondition || secondCondition) {
          if (command === "n") {
              if (nFound) {
                  printWord += command;
              }
              nFound = true;
          } else if (command === "c") {
              if (cFound) {
                  printWord += command;
              }
              cFound = true;
          } else if (command === "o") {
              if (oFound) {
                  printWord += command;
              }
              oFound = true;
          } else {
              printWord += command;
          }

          if (nFound && cFound && oFound) {
              printLine += `${printWord} `;
              printWord = "";
              nFound = false;
              cFound = false;
              oFound = false;
          }
      }
      command = input[index++];
  }  
  console.log(printLine);
}
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "", "A", "D", "End"]);

// (["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
// (["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\", "A", "D", "End"]);