function phoneBook(entries) {
    let dict = {};

    for (let entry of entries) {
        let [name, number] = entry.split(' ');
        dict[name] = number;
    }

    for (let name in dict) {
        console.log(`${name} -> ${dict[name]}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877574887', 'Bill 0896543112', 'Tim 0876566344']);
