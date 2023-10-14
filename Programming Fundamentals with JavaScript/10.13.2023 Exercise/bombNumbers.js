function detonateSequence(sequence, bombInfo) {
    const [bomb, power] = bombInfo;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb) {
            const start = Math.max(i - power, 0);
            const end = Math.min(i + power, sequence.length - 1);

            sequence.splice(start, end - start + 1);

            i = Math.max(i - power - 1, -1);
        }
    }
    
   
    return sequence.reduce((sum, num) => sum + num, 0);
}

console.log(detonateSequence([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));