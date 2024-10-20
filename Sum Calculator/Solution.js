let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let btn = document.getElementById('mybtn')
let result = document.getElementById('result')

btn.addEventListener('click' , ()=>{
 let ans = Number(num1.value) + Number(num2.value);
console.log(ans)
result.value = ans

})
