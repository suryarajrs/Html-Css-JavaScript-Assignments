let container =document.querySelector('.container');
let btn = document.getElementById('darkModeBtn');

btn.addEventListener('click' , ()=>{
    container.classList.toggle('dark-mode')
})
