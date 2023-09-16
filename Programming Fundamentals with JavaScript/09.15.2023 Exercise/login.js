function login(data) {
    const username = data[0];
    const correctPassword = username.split('').reverse().join('');
    let attempts = 0;

    for (let i = 1; i < data.length; i++) {
        if (data[i] !== correctPassword) {
            attempts++;
            if (attempts === 3) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
                console.log("Incorrect password. Try again.");
            }
        } else {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);