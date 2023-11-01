function addressBook(input) {
    
    let entries = {};
    
    for(let entry of input) {
        let [name, addres] = entry.split(':');

        if (!entries[name]) {
            entries[name] = addres;
        } else {
            entries[name] = addres;
        }
    }

    const sortedEntries = Object.entries(entries);

    sortedEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedEntries) {
        console.log(`${name} -> ${address}`);
    }
    
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);