const submitBtn = document.getElementById("submit-btn");
// write your code here

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
let output = document.querySelector(".output");

submitBtn.addEventListener('click' , (e)=>{
  e.preventDefault()
})

firstDiv.addEventListener("click", () => {
    output.innerText += "first div called";
});

secondDiv.addEventListener("click", (e) => {
    // write your code here
    e.stopPropagation()
    output.innerText += "second div called -- ";
});
