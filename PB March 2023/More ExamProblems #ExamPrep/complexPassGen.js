var Password = {
    _pattern: /[a-zA-Z0-9_\-\+\.]/,
  
    _getRandomByte: function () {
      return Math.floor(Math.random() * 256);
    },
  
    generate: function (length) {
      return Array.apply(null, { length: length })
        .map(function () {
          var result;
          while (true) {
            result = String.fromCharCode(this._getRandomByte());
            if (this._pattern.test(result)) {
              return result;
            }
          }
        }, this)
        .join("");
    },
  };
  
  var passwordLength = 18;
  var randomPassword = Password.generate(passwordLength);
  console.log(randomPassword);
  