// 0-100 units     → Rs. 5 per unit
// 101-200 units   → Rs. 8 per unit  
// 201-300 units   → Rs. 12 per unit
// 300+ units      → Rs. 15 per unit

function calculateElectricityBill(units) {
  let bill = 0;

  if (units <= 100)
    bill = units * 5
  else if (units <= 200)
    bill = (100 * 5) + ((units - 100) * 8)
  else if (units <= 300)
    bill = (100 * 5) + (100 * 8) + ((units - 200) * 12)
  else
    bill = (100 * 5) + (100 * 8) + (100 * 12) + ((units - 300) * 15)

  return `Total Rs. ${bill}`
}

console.log(calculateElectricityBill(50))
console.log(calculateElectricityBill(150))
console.log(calculateElectricityBill(250))
console.log(calculateElectricityBill(350))
console.log(calculateElectricityBill(1000))
