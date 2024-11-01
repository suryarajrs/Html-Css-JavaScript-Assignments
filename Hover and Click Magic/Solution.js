// javascript code goes here
let currentColor = 'blue'

let circle = document.querySelectorAll('.circle');
circle.forEach((ele) => {
 
    ele.addEventListener("mouseover", (e) => {
  console.log(e.target.style.backgroundColor)
        e.target.style.backgroundColor = 'transparent'
    })
    ele.addEventListener("mouseout", (e) => {

        e.target.style.backgroundColor = currentColor
    })
})

document.body.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    
  currentColor = `rgb(${r},${g},${b})`


    circle.forEach((ele) => {
        ele.style.backgroundColor = currentColor
    })
})
