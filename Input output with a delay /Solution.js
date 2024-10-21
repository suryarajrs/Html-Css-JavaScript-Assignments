
let btn = document.getElementById("toggleinputs")

let input2 = document.getElementById('input2');
let input1 = document.getElementById('input1');

let textoutput = document.getElementById('textoutput');
let count = document.getElementById('count');

input2.style.display = "none";

btn.addEventListener('click' , ()=>{
    if(input2.style.display === "none"){
        input2.style.display = "block";
    }else if (input2.style.display === "block"){
       input2.style.display = "none"
    }
});

let clearTimeoutId;

input1.addEventListener('input' , (e)=>{
    clearTimeout(clearTimeoutId)
    let inputval = e.target.value
     count.textContent = `${inputval.length} characters`

      clearTimeoutId = setTimeout(()=>{
       textoutput.textContent = inputval
       input1.value = "";
       count.textContent = ""
     },4000)
   
    
})
input2.addEventListener('input' , (e)=>{
     clearTimeout(clearTimeoutId)
    let inputvalue  = e.target.value
    let wordCount = inputvalue.split(/\s+/)
     count.textContent = `${wordCount.length} words`
   
      clearTimeoutId = setTimeout(()=>{
       textoutput.textContent = inputvalue
       input2.value = "";
       count.textContent = ""
     },4000)
})
