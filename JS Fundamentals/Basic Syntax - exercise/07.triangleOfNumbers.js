function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let print = "";
        for (let j = 1; j <= i; j++) {
            print += `${i} `;
        }
        console.log(print);
    }
}
triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);