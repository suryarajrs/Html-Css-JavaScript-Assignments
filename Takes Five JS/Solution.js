

let container = document.querySelector('.container');
let bactBtn = document.getElementById("back-button");
let nextBtn = document.getElementById("next-button");

let currentPage = 1;
const numbersPerPage = 5;

function update(page) {
    container.innerHTML = "";

    let startingNumber = (page - 1) * numbersPerPage + 1;

    let endingNumber = startingNumber + numbersPerPage - 1;


    for (let i = startingNumber; i <= endingNumber; i++) {
        let div = document.createElement('div');
        div.textContent = i
        container.appendChild(div)
    }

    if (page == 1) {
        bactBtn.disabled = true;
    } else {
        bactBtn.disabled = false;
    }

}

bactBtn.addEventListener('click', () => {

    currentPage--;
    update(currentPage)


});

nextBtn.addEventListener('click', () => {

    currentPage++;
    update(currentPage)


});
update(currentPage)
