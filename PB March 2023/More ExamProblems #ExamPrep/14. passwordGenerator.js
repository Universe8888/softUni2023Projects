function passwordGenerator(input) {
    let n = parseInt(input[0]);
    let l = parseInt(input[1]);
    let result = '';
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        for (let k = 0; k < l; k++) {
          for (let m = 0; m < l; m++) {
            for (let p = Math.max(i, j) + 1; p <= n; p++) {
              let char1 = String.fromCharCode(97 + k);
              let char2 = String.fromCharCode(97 + m);
              result += `${i}${j}${char1}${char2}${p} `;
            }
          }
        }
      }
    }
  
    console.log(result.trim());
  }
  
  passwordGenerator(["2", "4"]);
  