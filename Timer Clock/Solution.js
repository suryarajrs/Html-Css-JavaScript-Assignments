// javascript code goes here
let clk = document.getElementById('clock');
let input = document.getElementById('limit');
let btn = document.getElementById('btnStart')
let intervalId;
let totalSeconds = Number(input.value);

input.addEventListener('change',(e)=>{
totalSeconds = e.target.value
})


function startTime(){
     let count = 1;
    clearInterval(intervalId);
    clk.className = "running";
    
    intervalId = setInterval(() => {
        
        let mins = String(Math.floor(count / 60)).padStart(2, '0');
        let sec = String(Math.floor(count % 60)).padStart(2,"0")
        clk.textContent = `${mins}:${sec}`
       if(count == totalSeconds ){
           clearInterval(intervalId)
           clk.className = "stopped";
           count = 0
       }else{
           count++ 
       }
    }, 1000) 
}
btn.addEventListener('click', startTime)
