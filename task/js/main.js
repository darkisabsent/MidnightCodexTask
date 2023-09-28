const products = [
    { id: 0, title: 'Riot Cash (EU) - €2.50 EURO', price: 2 },
    { id: 1, title: 'Riot Cash (EU) - €10 EURO', price: 10 },
    { id: 2, title: 'Riot Cash (EU) - €25 EURO', price: 25 },
    { id: 3, title: 'Riot Cash (EU) - €50 EURO', price: 50 }
];

const root = document.getElementById('root');
const cart = [];

function renderProducts() {
    root.innerHTML = products.map((product, index) => `
        <div class='box' onclick='addToCart(${index})'>
			
            <div class='img-box'>
                <img class='images' src="img/riot.png" alt="Product Image">
            </div>
			
            <div class='bottom'>
                <p>${product.title}</p>
                <p>$ ${product.price}.00</p>
                
            </div>	
        </div>
    `).join('');
}
/*to addd*/
function addToCart(index) {        //no time to create one to delete 
    const product = products[index];
    cart.push(product);
    displayCart();
}



function displayCart() {
    const cartItem = document.getElementById('cartItem');
    const total = document.getElementById('total');
    cartItem.innerHTML = cart.length === 0 ? "Your cart is empty" : "";//sidebar

    let totalPrice = 0;
    const cartItemsHTML = cart.map((item, index) => {
        totalPrice += item.price;
        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src="img/riot.png" alt="Product Image">
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <p style='font-size: 15px;'>$ ${item.price}.00</p>

            </div>
        `;
    }).join('');

    total.innerHTML = `$ ${totalPrice.toFixed(2)}`;//how many 0 after the.(2)
    document.getElementById('cartItem').innerHTML += cartItemsHTML;//add element
}

renderProducts();



