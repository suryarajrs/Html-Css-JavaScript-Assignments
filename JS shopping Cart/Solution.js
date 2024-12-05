
const productButtons = document.querySelectorAll('.addToCart');
const cartTotal = document.getElementById('totalPrice');


let cart = [];


productButtons.forEach((button) => {
    button.addEventListener('click', function () {

        const productName = this.dataset.name;
        const productPrice = parseFloat(this.dataset.price);
        cart.push({ name: productName, price: productPrice })
        const totalPrice = cart.reduce((total, product) => total + product.price, 0);
        cartTotal.innerText = `$${totalPrice}`;
    });
});
