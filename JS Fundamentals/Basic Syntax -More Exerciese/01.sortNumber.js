function sortNumbers(firstNum, secondNum, thirdNum) {
    let arrNum = [];
    arrNum.push(firstNum, secondNum, thirdNum);
    let sorted = arrNum.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}
sortNumbers(2, 1, 3);