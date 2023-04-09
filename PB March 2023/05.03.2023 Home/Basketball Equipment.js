function basketballEquipment(input) {
    let practiceFee = Number(input[0]);
    let sneakersPrice = practiceFee * 0.6;
    let teamPrice = sneakersPrice * 0.8;
    let ballPrice = teamPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let totalCost = practiceFee + sneakersPrice + teamPrice + ballPrice + accessoriesPrice;
    console.log(totalCost);
  }
  
  basketballEquipment(["365"]);
  