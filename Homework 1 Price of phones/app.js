//Write a JavaScript program that will calculate the price of 30 Phones,
// where the price of one phone is $119.95 and the tax rate is 5%.

let priceOfOnePhone = 119.95;
let priceOfAllPhonesWithoutTax = priceOfOnePhone * 30;
console.log("Price of 30 Phones No TAX", priceOfAllPhonesWithoutTax);
let totalTaxAmount = priceOfAllPhonesWithoutTax * 0.05;
console.log("Total Tax Amount", totalTaxAmount);
let FinalPrice = priceOfAllPhonesWithoutTax + totalTaxAmount;
console.log("Final Price", FinalPrice);
