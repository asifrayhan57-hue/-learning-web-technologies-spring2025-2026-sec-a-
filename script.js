// Fixed Unit Price
const UNIT_PRICE = 1000; // static data
 
// DOM elements
const unitPriceDisplay = document.getElementById('unitPriceDisplay');
const qtyInput = document.getElementById('qty');
const totalInput = document.getElementById('totalPrice');
 
// show unit price on page
unitPriceDisplay.textContent = UNIT_PRICE;
 
function updateTotal(){
  // read value and coerce to number
  let q = Number(qtyInput.value);
 
  // Validation: treat non-number or negative as 0
  if (isNaN(q) || q < 0) {
    q = 0;
    qtyInput.value = 0; // reset input to 0
  }
 
  const total = UNIT_PRICE * q;
 
  // update readonly field
  totalInput.value = total;
 
  // Gift coupon notification if total exceeds 1000
  if (total > 1000){
    alert('You are eligible for a gift coupon!');
  }
}
 
// Real-time update
qtyInput.addEventListener('input', updateTotal);
 
// initialize
updateTotal();
 