let btn1 = document.getElementById('task1Btn');
let btn2 = document.getElementById('task2Btn');
let btn3 = document.getElementById('task3Btn');

let task1 = document.getElementById('task1Status')
let task2 = document.getElementById('task2Status')
let task3 = document.getElementById('task3Status')

function simulateTask(duration, callback) {
    setTimeout(callback, duration);
}


btn1.addEventListener('click', ()=>{
   simulateTask(2000 , ()=>{
     btn2.disabled = false;
    task1.innerText='Task 1 completed!'
});
})
btn2.addEventListener('click', ()=>{
   simulateTask(2000 , ()=>{
    btn3.disabled = false;
    task2.innerText='Task 2 completed!'
});
})
btn3.addEventListener('click', ()=>{
   simulateTask(2000 , ()=>{
    btn3.disabled = false;
    task3.innerText='Task 3 completed!'
});
})
