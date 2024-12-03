const fruits = [
    { name: "Lemon", type: "citrus" },
    { name: "Orange", type: "citrus" },
    { name: "Strawberry", type: "berry" },
    { name: "Blueberry", type: "berry" },
    { name: "Peach", type: "stone" },
    { name: "Cherry", type: "stone" },
];

let list = document.getElementById('fruitList');

let btn = document.getElementById('filterBtn');

btn.addEventListener('click' , ()=>{
    let selectBtn = document.getElementById('fruitType')
 const selectedType = selectBtn.value;

  const filteredFruits = selectedType === "all" 
    ? fruits 
    : fruits.filter((fruit) => fruit.type === selectedType);

  renderList(filteredFruits);
})

function renderList(arry){
    list.innerHTML = ""
arry.forEach((ele)=>{
  list.innerHTML += `
  <li>${ele.name}</li>
  `
})
}

renderList(fruits)
