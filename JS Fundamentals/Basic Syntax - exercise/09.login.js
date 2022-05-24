function login(arr) {
    let userName = arr[0];
    let password = userName.split("").reverse().join("");

    for (let i = 1; i < arr.length; i++) {
        if (password === arr[i]) {
            console.log(`User ${userName} logged in.`);
        } else {
            if (i === arr.length - 1) {
                console.log(`User ${userName} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
