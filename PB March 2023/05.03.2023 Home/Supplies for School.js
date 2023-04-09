function supliesFS(input) {
    let piecesOfhimikalki = Number(input[0]);
    let piecesOfMarkeri = Number(input[1]);
    let litersOfpreparat = Number(input[2]);
    let discountPercentage = Number(input[3]) / 100;
  
    let priceChemicalPack = 5.8;
    let priceMarkerPack = 7.2;
    let priceBoardCleaner = 1.2;
  
    let totalCost = (priceChemicalPack * piecesOfhimikalki) 
                  + (priceMarkerPack * piecesOfMarkeri) 
                  + (priceBoardCleaner * litersOfpreparat);
    let discountedCost = totalCost - (totalCost * discountPercentage);
  
    console.log(discountedCost);
  }
  
  supliesFS(["2", "3", "4", "25"]);
  

// От конзолата се четат 4 числа:
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]
