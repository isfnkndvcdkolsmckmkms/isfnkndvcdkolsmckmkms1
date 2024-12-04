// Cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElem = document.getElementById('cart-count');
    const cartItemsElem = document.getElementById('cart-items');
    const cartTotalAmountElem = document.getElementById('cart-total-amount');

    // Initialize cart from localStorage or create an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart UI
    updateCartCount();
    displayCartItems();

    // Add to cart button listener
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElem = button.closest('.product');
            const productId = productElem.getAttribute('data-id');
            const productName = productElem.getAttribute('data-name');
            const productPrice = parseFloat(productElem.getAttribute('data-price'));

            addToCart(productId, productName, productPrice);
            updateCartCount();
        });
    });

    // Add item to cart
    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    // Update the cart item count in the header
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElem.textContent = totalItems;
    }

    // Display cart items in the cart section
    function displayCartItems() {
        if (cart.length === 0) {
            cartItemsElem.innerHTML = '<p>No items in the cart yet.</p>';
            cartTotalAmountElem.textContent = '0.00';
            return;
        }

        cartItemsElem.innerHTML = '';
        let totalAmount = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.name} (${item.quantity})</h4>
                <p>$${item.price} each - Total: ₱${itemTotal.toFixed(2)}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;

            cartItemsElem.appendChild(cartItem);
        });

        cartTotalAmountElem.textContent = totalAmount.toFixed(2);

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    // Remove item from cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
    }
});
// Cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElem = document.getElementById('cart-count');
    const cartItemsElem = document.getElementById('cart-items');
    const cartTotalAmountElem = document.getElementById('cart-total-amount');

    // Initialize cart from localStorage or create an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart UI
    updateCartCount();
    displayCartItems();

    // Add to cart button listener
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElem = button.closest('.product');
            const productId = productElem.getAttribute('data-id');
            const productName = productElem.getAttribute('data-name');
            const productPrice = parseFloat(productElem.getAttribute('data-price'));

            addToCart(productId, productName, productPrice);
            updateCartCount();
        });
    });

    // Add item to cart
    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if item already in cart
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        // Save the cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    // Update the cart item count in the header
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElem.textContent = totalItems;
    }

    // Display cart items and update the total price
    function displayCartItems() {
        if (cart.length === 0) {
            cartItemsElem.innerHTML = '<p>No items in the cart yet.</p>';
            cartTotalAmountElem.textContent = '0.00';
            return;
        }

        cartItemsElem.innerHTML = '';
        let totalAmount = 0; // Initialize total amount

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity; // Calculate total for each item
            totalAmount += itemTotal; // Add to the cart's total price

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.name} (${item.quantity})</h4>
                <p>₱${item.price} each - Total: ₱${itemTotal.toFixed(2)}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;

            cartItemsElem.appendChild(cartItem);
        });

        // Update total price in the cart
        cartTotalAmountElem.textContent = totalAmount.toFixed(2);

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    // Remove item from cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id); // Remove item from cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartCount(); // Update count in header
        displayCartItems(); // Refresh cart UI
    }
        });
    function buyNow(productId) {
        // Logic for the Buy Now button for individual products
        alert(`You are buying product ID: ${productId}`);
        // Redirect to a payment page or perform any other action here
    }

    function checkout() {
        // Logic for the Buy Now button in the cart
        let cartTotal = document.getElementById("cart-total-amount").innerText;
        if (cartTotal > 0) {
            alert("Proceeding to checkout with a total of ₱" + cartTotal);
            // Redirect to a payment page or perform any other action here
        } else {
            alert("Your cart is empty. Please add items to your cart before proceeding.");
        }
    }
