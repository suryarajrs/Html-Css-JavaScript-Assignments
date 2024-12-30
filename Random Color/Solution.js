function handleClick(){

   let body = document.querySelector('body');

   let r = Math.floor(Math.random()*255)
   let g = Math.floor(Math.random()*255)
   let b = Math.floor(Math.random()*255)

   

   body.style.backgroundColor = `rgb(${r} ${g} ${b})`
}
