function printAndSum(startNum, endNum) {
    let result = 0;
    let printNum = "";

    for (let i = startNum; i <= endNum; i++) {
        printNum += i + " ";
        result += i;
    }
    console.log(printNum);
    console.log(`Sum: ${result}`);
}
printAndSum(5, 10);