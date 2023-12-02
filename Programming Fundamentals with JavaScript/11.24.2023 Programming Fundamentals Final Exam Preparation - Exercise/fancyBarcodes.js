function fancyBarcodes(input) {
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let digitPattern = /\d/g;

    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let barcode = input[i];
        let match = barcode.match(pattern);
        if (match) {
            let productGroup = match[0].match(digitPattern);
            if (productGroup) {
                console.log(`Product group: ${productGroup.join("")}`);
            } else {
                console.log("Product group: 00");
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}


fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);

// // Product group: 00
// // Product group: 0
// // Product group: 46

// fancyBarcodes(["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"]);

// // // Product group: 11
// // // Product group: 00
// // // Invalid barcode
// // // Invalid barcode
// // // Invalid barcode
// // // Product group: 00

//100/100 solution