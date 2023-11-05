function gladiatorArena(input) {

    const gladiators = {};

    function addOrUpdateGladiator(gladiator, technique, skill) {
        gladiators[gladiator] = gladiators[gladiator] || { totalSkill: 0, techniques: {} };
        
        const currentSkill = gladiators[gladiator].techniques[technique] || 0;
        if (skill > currentSkill) {
            gladiators[gladiator].totalSkill += skill - currentSkill;
            gladiators[gladiator].techniques[technique] = skill;
        }
    }

    function duel(gladiator1, gladiator2) {
        const [g1, g2] = [gladiators[gladiator1], gladiators[gladiator2]];
        if (!g1 || !g2) return;

        const commonTechniques = Object.keys(g1.techniques).some(technique => g2.techniques[technique]);
        if (!commonTechniques) return;

        const loser = g1.totalSkill > g2.totalSkill ? gladiator2 : gladiator1;
        delete gladiators[loser];
    }

    function displayResults() {
        const sortedGladiators = Object.entries(gladiators)
            .sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]));

        sortedGladiators.forEach(([gladiator, info]) => {
            console.log(`${gladiator}: ${info.totalSkill} skill`);
            const sortedTechniques = Object.entries(info.techniques)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            sortedTechniques.forEach(([technique, skill]) => console.log(`- ${technique} <!> ${skill}`));
        });
    }

    input.forEach(line => {
        if (line === "Ave Cesar") {
            displayResults();
            return;
        }

        const [left, right] = line.includes(' -> ') ? line.split(' -> ') : line.split(' vs ');

        if (line.includes(' -> ')) {
            addOrUpdateGladiator(left, right, parseInt(line.split(' -> ')[2]));
        } else if (line.includes(' vs ')) {
            duel(left, right);
        }
    });
}

gladiatorArena([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);