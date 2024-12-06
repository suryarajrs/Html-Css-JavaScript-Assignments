const numbersInput = document.getElementById('numbers');
const submitBtn = document.getElementById('submitBtn');
const resultParagraph = document.getElementById('result');

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  
  const numbersArray = numbersInput.value.split(',').map(Number);

  const evenNumbers = numbersArray.filter(num => num % 2 === 0);

  resultParagraph.innerText = `The even numbers are: ${evenNumbers.join(', ')}`;
});
