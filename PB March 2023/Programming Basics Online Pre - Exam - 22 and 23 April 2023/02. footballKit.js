function willPepiWinTheBall(input) {
    const tShirtPrice = parseFloat(input[0]);
    const targetAmount = parseFloat(input[1]);
  
    const shortsPrice = tShirtPrice * 0.75;
    const socksPrice = shortsPrice * 0.20;
    const buttonsPrice = (tShirtPrice + shortsPrice) * 2;
    const totalPrice = tShirtPrice + shortsPrice + socksPrice + buttonsPrice;
    const finalPrice = totalPrice * 0.85;
  
    if (finalPrice >= targetAmount) {
      console.log("Yes, he will earn the world-cup replica ball!");
      console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    } else {
      const notEnoughMoney = targetAmount - finalPrice;
      console.log("No, he will not earn the world-cup replica ball.");
      console.log(`He needs ${notEnoughMoney.toFixed(2)} lv. more.`);
    }
  }
  
  // Example usage
  willPepiWinTheBall(["25", "100"]);
  