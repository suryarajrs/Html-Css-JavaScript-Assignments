let inputvalue = document.getElementById('inputArea');
let output = document.getElementById('output');

const btn = document.querySelector('button');

btn.addEventListener('click' , ()=>{
let inputArray = inputvalue.value.split(',').sort((a,b)=>b-a);

output.textContent = inputArray.slice(0 , 3).join(", ");
console.log(inputArray)
})
