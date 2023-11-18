function matchFullName(input) {
    let fullNamePattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
   
    let result = input.match(fullNamePattern);

    console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");