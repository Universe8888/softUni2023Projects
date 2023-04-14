function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomPasswordGenerator(passwordLength) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,./<>?';
    const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  
    let password = '';
  
    for (let i = 0; i < passwordLength; i++) {
      password += allCharacters[getRandomInt(0, allCharacters.length - 1)];
    }
  
    return password;
  }
  
  const passwordLength = 18;
  const randomPassword = randomPasswordGenerator(passwordLength);
  console.log(randomPassword);  

  