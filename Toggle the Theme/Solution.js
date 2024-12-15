// javascript code goes here
let toggleBtn = document.getElementById('btn')
let body = document.querySelector('body')

toggleBtn.addEventListener('click' , ()=>{
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }

})
