function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log((String(i) + " ").repeat(i).trim());
    }
}

printTriangle(3);
