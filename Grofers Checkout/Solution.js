// javascript code goes here

const prices = document.querySelectorAll('[data-ns-test="price"]');

let totalPrice = 0;
prices.forEach(priceElement => {
    totalPrice += Number(priceElement.textContent) || 0; 
});


const totalRow = document.createElement('tr');
const cell = document.createElement('td');
const totalCell = document.createElement('td');

cell.textContent = "Total"


totalCell.setAttribute('data-ns-test', 'grandTotal');
totalCell.textContent = totalPrice.toFixed(2)
 
totalRow.append(cell ,totalCell );
document.querySelector('table').appendChild(totalRow);
