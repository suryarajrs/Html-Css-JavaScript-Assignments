const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

let inputName = document.getElementById('nameInput');
let inputDescription = document.getElementById('descriptionInput');

inputName.addEventListener('input',(e)=>{

let cartProfileName = document.getElementById('profileName');
cartProfileName.innerText = e.target.value
})

inputDescription.addEventListener('input', (e)=>{
 let profileDescription = document.getElementById('profileDescription');
 profileDescription.innerText = e.target.value
})




let img = document.getElementById('profileImg')  

img.addEventListener('click',(e)=>{
   
    let randomIndex = Math.floor(Math.random()*colors.length)

    console.log(randomIndex)

     e.target.style.borderColor = colors[randomIndex]

})
