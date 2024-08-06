let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    alert(`Order placed! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCart();
}
