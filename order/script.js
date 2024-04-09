const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');

quantityInput.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const pricePerEyeglass = 2000;
    const quantity = parseInt(quantityInput.value);
    const total = pricePerEyeglass * quantity;
    totalPrice.textContent = `Total Price: ₹${total}`;
}

function handle() {
 window.location.href = "payment.html";
}