

let counter = document.getElementById('counter');

let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')

let count = 0;

counter.textContent=count;

increment.addEventListener('click' , ()=>{
    count++
    counter.textContent=count;
})
decrement.addEventListener('click' , ()=>{
    if(count == 0){
        return
    }
    count--
    counter.textContent=count;
})
