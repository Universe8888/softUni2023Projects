function depositCalc(input) {
    let depositsum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]);
  
    let amountReceived = depositsum + depositPeriod * ((depositsum * annualInterestRate) / 1200);
  
    console.log(amountReceived.toFixed(2));
  }
  
  depositCalc(["200 ", "3 ", "5.7 "]); // Output: 202.85
  

// Вход
// От конзолата се четат 3 реда:
// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
