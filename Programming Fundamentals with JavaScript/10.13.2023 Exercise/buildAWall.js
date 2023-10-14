function wallbuilder(sections) {
    let wall = sections.map(Number);
    const goalHeight = 30;
    const concretePerFoot = 195;
    const costPerCubicYard = 1900;
    
    let dailyConcrete = [];
    
    while (wall.some(section => section < goalHeight)) {
        let dailyUse = 0; 
        
        
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < goalHeight) {
                wall[i]++;
                dailyUse += concretePerFoot;
            }
        }
        dailyConcrete.push(dailyUse);
    }

    const totalConcrete = dailyConcrete.reduce((acc, curr) => acc + curr, 0);
    const totalCost = totalConcrete * costPerCubicYard;
    
    
    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);
}

wallbuilder(['21', '25', '28']);