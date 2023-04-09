function yardGreening(arg1) {
  let price = Number(arg1) * 7.61;
  let discount = Number(price) * 0.18;
  let finalPrice = Number(price - discount);
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yardGreening('540')