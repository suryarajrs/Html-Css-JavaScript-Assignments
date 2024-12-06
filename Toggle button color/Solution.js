let changeButton = document.getElementById('changeButton')

changeButton.addEventListener('click' , (e)=>{
  let inputValue = document.getElementById('colorInput').value
 e.target.style.backgroundColor = inputValue
})
