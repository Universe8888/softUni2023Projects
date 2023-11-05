function legendaryItem(input) {
    const keyMaterials = { 'shards': 0, 'fragments': 0, 'motes': 0 };
    const junk = {};
    const legendaryItems = { 'shards': 'Shadowmourne', 'fragments': 'Valanyr', 'motes': 'Dragonwrath' };
    let legendaryObtained = false;

    input.split(' ').forEach((item, index, array) => {
        if (index % 2 === 0 && !legendaryObtained) { 
            const quantity = parseInt(item);
            const material = array[index + 1].toLowerCase();
            
            if (keyMaterials.hasOwnProperty(material)) {
                keyMaterials[material] += quantity;
                
                if (keyMaterials[material] >= 250 && !legendaryObtained) {
                    console.log(`${legendaryItems[material]} obtained!`);
                    keyMaterials[material] -= 250;
                    legendaryObtained = true;
                }
            } else {
                junk[material] = (junk[material] || 0) + quantity;
            }
        }
    });

    Object.entries(keyMaterials)
        .sort(([aKey, aValue], [bKey, bValue]) => bValue - aValue || aKey.localeCompare(bKey))
        .forEach(([key, value]) => console.log(`${key}: ${value}`));

    Object.entries(junk)
        .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
        .forEach(([key, value]) => console.log(`${key}: ${value}`));
}

legendaryItem("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
// legendaryItem("123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver");