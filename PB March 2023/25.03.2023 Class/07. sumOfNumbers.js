function sumOfNumbers(input) {
    let n = input[0] + "";
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
      let digitStr = Number(n[i]);
      sum += digitStr; 
    }
    console.log(`The sum of the digits is:${sum}`);
  }
  
  sumOfNumbers(["564891"]); // gets 80/100 in Judge защото пейст бина го прати на число а Judge дава прекалено голям стринг в инпут
  // и не се пресмята точно
  
  // https://pastebin.com/DSTK7NZK 