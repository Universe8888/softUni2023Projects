function partyTime(strings) {
    const [regularList, vipList] = [[], []]
    const partyIndex = strings.indexOf('PARTY');
    strings.slice(0, partyIndex).forEach(x => isNaN(parseInt(x[0])) ? regularList.push(x) : vipList.push(x));
    strings.slice(partyIndex + 1).forEach(x => {
        const indexInRegular = regularList.indexOf(x);
        const indexInVip = vipList.indexOf(x);
        if (indexInRegular !== -1) regularList.splice(indexInRegular, 1);
        if (indexInVip !== -1) vipList.splice(indexInVip, 1);
    });
    console.log(`${regularList.length + vipList.length}`);
    vipList.concat(regularList).forEach(name => console.log(name));
}

const guestList = [
    '7IK9Yo0h', '0SzE5tOp', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'PARTY', 
    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
];

partyTime(guestList);