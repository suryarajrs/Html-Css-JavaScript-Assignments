// javascript code goes here


async function fetchAndDisplayTitles() {

    const response = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
    const data = await response.json();

    const titleContainer = document.getElementById('title-container');


    const ul = document.createElement('ul');

    data.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title.title;
        ul.appendChild(li);
    });

    titleContainer.appendChild(ul);

}

fetchAndDisplayTitles();
