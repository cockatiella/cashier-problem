


let cashCounter = [
    { 50: 3 },
    { 20: 5 },
    { 10: 5 },
    { 5: 10 },
    { 2: 3 },
    { 1: 5 },
    { "0.50": 8 },
    { "0.20": 5 },
    { "0.10": 10 },
    { 0.05: 5 },
    { 0.01: 10 },
  ];
  // To calculate the change
  const prompt = require("prompt-sync")({ sigint: true });
  let price = parseFloat(prompt("Please enter the product price: "));
  let cash = parseFloat(prompt("Please enter the amount paid: "));
  let difference = cash - price; 

  let change = [
    { 50: 0 },
    { 20: 0 },
    { 10: 0 },
    { 5: 0 },
    { 2: 0 },
    { 1: 0 },
    { 0.50: 0 },
    { 0.20: 0 },
    { 0.10: 0 },
    { 0.05: 0 },
    { 0.01: 0 },
  ];
  for (const item of change) {
    for (const key in item) {
        while(difference >= Number(key)){
            difference -=Number(key);
            ++item[key]
        }
    }
  }
  console.log(change);
 