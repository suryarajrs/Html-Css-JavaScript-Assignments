let input = document.getElementById('numbers');
let btn = document.getElementById('submitBtn');
let resut = document.getElementById('result')

btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    let numbersarry = input.value.split(',');
   let resultarry = numbersarry.map((ele)=>{
     return ele*ele
   })

   resut.innerText = `The squares are: ${resultarry.join(', ')}`
})
