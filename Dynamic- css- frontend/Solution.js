let textChange = document.getElementById('text-container');

// color change functionality
let color = document.getElementById('colorbox');
let colorBtn = document.getElementById('colorchange');

colorBtn.addEventListener("click" , ()=>{
  textChange.style.color =  color.value
})

// Font Size Adjustment

let slider = document.getElementById('fontsize');
 
slider.addEventListener('input', ()=>{
    textChange.style.fontSize = ` ${slider.value}px`
})

// text style toggles

document.getElementById('underline').addEventListener('click' , ()=>{

    if (textChange.style.textDecoration === 'underline') {
        textChange.style.textDecoration = 'none'; // Remove underline
    } else {
        textChange.style.textDecoration = 'underline'; // Add underline
    }
})
document.getElementById('italic').addEventListener('click' , ()=>{
    if (textChange.style.fontStyle === 'italic') {
        textChange.style.fontStyle = 'normal'; // Remove italic
    } else {
        textChange.style.fontStyle = 'italic'; // Add italic
    }
})
document.getElementById('bold').addEventListener('click' , ()=>{
    if (textChange.style.fontWeight === 'bold') {
        textChange.style.fontWeight = 'normal'; // Remove bold
    } else {
        textChange.style.fontWeight = 'bold'; // Add bold
    }
})

// Font Family Selection

let list = document.getElementById('list')
 list.addEventListener('change', ()=>{
    textChange.style.fontFamily = list.value
})

// Display CSS Properties 

document.getElementById('getstyle').addEventListener('click' , ()=>{

let divStyles = document.querySelector('.text-here')
document.getElementById('css-props').textContent = `color: ${divStyles.style.color || 'initial'}; font-size:${divStyles.style.fontSize || '55px'}; text-decoration:${divStyles.style.textDecoration || 'none'}; font-style:${divStyles.style.fontStyle || 'normal'}; font-family:${divStyles.style.fontFamily || 'Arial'}; `
})
