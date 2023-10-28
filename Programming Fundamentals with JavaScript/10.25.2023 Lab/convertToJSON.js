function convertToJSON(firstName, lastName, hairColor) {
    const obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    const jsonString = JSON.stringify(obj);
    console.log(jsonString);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');