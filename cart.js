// Example cart data
const cartItems = [
    { id: 1, name: "Event Hall A", price: 150 },
    { id: 2, name: "Catering Service B", price: 200 },
];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = 0;

    // Clear previous items
    cartItemsContainer.innerHTML = '';

    // Loop through cart items and render them
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;

        cartItemsContainer.appendChild(cartItemElement);
        totalAmount += item.price;
    });

    // Update the total amount
    totalAmountElement.textContent = `Total: $${totalAmount}`;
}

// Event listener for "Proceed to Payment" button
document.getElementById('proceed-btn').addEventListener('click', function() {
    window.location.href = 'payment.html';
});

// Initial render of cart items
renderCartItems();
