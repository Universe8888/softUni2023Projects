function sequence2kAnd1(input) {
    let n = Number(input[0]);
    let num = 1;
    while (num <= n) {
      console.log(num);
      num = num * 2 + 1;
    }
  }
  
  sequence2kAnd1(["31"]);
  