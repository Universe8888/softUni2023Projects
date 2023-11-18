function processDemons(input) {
    let demons = input.split(/,\s*/).map(demon => demon.trim()).sort();
    let demonStats = [];

    demons.forEach(demon => {
        let health = [...demon].reduce((sum, char) => {
            return /[^\d+\-*/.]/.test(char) ? sum + char.charCodeAt(0) : sum;
        }, 0);

        let damage = (demon.match(/[+\-]?\d+(\.\d+)?/g) || []).reduce((sum, num) => sum + Number(num), 0);

        [...demon].forEach(char => {
            if (char === '*') damage *= 2;
            if (char === '/') damage /= 2;
        });

        demonStats.push(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    });

    return demonStats.join('\n');
}

const input = 'M3ph-0.5s-0.5t0.0**, Azazel, M3ph1st0**, Gos/ho';
console.log(processDemons(input));