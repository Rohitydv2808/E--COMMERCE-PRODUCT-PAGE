let products = [

    {
        id: 1,
        name: "Smart Watch",
        price: 1999,
        icon: "⌚"
    },

    {
        id: 2,
        name: "Headphones",
        price: 1499,
        icon: "🎧"
    },

    {
        id: 3,
        name: "Laptop",
        price: 49999,
        icon: "💻"
    },

    {
        id: 4,
        name: "Camera",
        price: 25999,
        icon: "📷"
    },

    {
        id: 5,
        name: "Shoes",
        price: 2999,
        icon: "👟"
    },

    {
        id: 6,
        name: "Backpack",
        price: 1299,
        icon: "🎒"
    }

];

let cart = [];

function displayProducts() {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(product => {

        productList.innerHTML += `

            <div class="product">

                <div class="product-image">
                    ${product.icon}
                </div>

                <h3>${product.name}</h3>

                <p>Price: ₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        `;
    });
}

function addToCart(id) {

    let product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();

    openCart();
}

function updateCart() {

    document.getElementById("cartCount").textContent =
        cart.length;

    let items = document.getElementById("cartItems");

    let total = 0;

    items.innerHTML = "";

    cart.forEach((product, index) => {

        total += product.price;

        items.innerHTML += `

            <div class="cart-item">

                <span>
                    ${product.icon} ${product.name}
                </span>

                <span>
                    ₹${product.price}
                </span>

                <button
                    class="remove"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;
    });

    document.getElementById("cartTotal").textContent =
        total;
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function openCart() {

    document.getElementById("cartModal").style.display =
        "flex";

    updateCart();
}

function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";
}

displayProducts();