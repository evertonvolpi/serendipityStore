document.querySelectorAll('.increase').forEach(item => {
    item.addEventListener('click', increase);
});

document.querySelectorAll('.decrease').forEach(item => {
    item.addEventListener('click', decrease);
});

document.querySelectorAll('.changeQty').forEach(item => {
    item.addEventListener('change', quantityInput);
});

document.querySelectorAll('.hideShowCart').forEach(item => {
    item.addEventListener('click', showHideCart);
});

document.querySelectorAll('.addToCart').forEach(item => {
    item.addEventListener('click', addToCart);
});


function increase() {
    var product = this.getAttribute('product');
    var quantity = document.querySelector(`#${product}Qty`).value;
    var item = document.querySelector(`#${product}Total`);
    var price = parseFloat(item.getAttribute('price'));
    quantity++;
    changeItemTotal(quantity, price, item);
    document.querySelector(`#${product}Qty`).value = quantity;
};

function decrease() {
    var product = this.getAttribute('product');
    var quantity = document.querySelector(`#${product}Qty`).value;
    var item = document.querySelector(`#${product}Total`);
    var price = parseFloat(item.getAttribute('price'));
    if(quantity <= 1) {
        quantity = 1;
    }
    else {
        quantity--
        changeItemTotal(quantity, price, item)
    }
    document.querySelector(`#${product}Qty`).value = quantity;
};

function quantityInput() {
    if (this.value < 1) {
        this.value = 1;
    }
    var quantity = this.value;
    var item = document.querySelector(`#${this.getAttribute('product')}Total`);
    var price = parseFloat(item.getAttribute('price'));
    changeItemTotal(quantity, price, item);    
};

function showHideCart() {
    document.querySelector('#cart').classList.toggle('hide');
    document.querySelector('.showCart').classList.toggle('hide');
};

function addToCart() {
    var product = this.getAttribute('product');

    if(product == 'panetone') {
        var flavour = document.querySelector(`input[name='${this.getAttribute('product')}']:checked`).value;
        var quantity = document.querySelector(`#${product}Qty`).value;
        var price = document.querySelector(`#${product}Total`).getAttribute('price');        
        product = `panetone${flavour}`;
    }
    else {
        var quantity = document.querySelector(`#${product}Qty`).value;
        var price = document.querySelector(`#${product}Total`).getAttribute('price');
    }

    document.querySelector(`#${product}Cart`).classList.remove('hide');

    var cartQuantity = document.querySelector(`#${product}CQty`).innerHTML;
    var item = document.querySelector(`#${product}CTotal`);
    var newQuantity = parseInt(quantity) + parseInt(cartQuantity);

    document.querySelector(`#${product}CQty`).innerHTML = newQuantity;

    changeItemTotal(newQuantity, price, item);
    
    cartTotal();
};

function changeItemTotal(quantity, price, item) {
    var total = quantity * price;
    item.innerHTML = total.toFixed(2);
};

function cartTotal() {
    var totalProducts = (
        parseFloat(document.querySelector('#panetoneChocCTotal').innerHTML) +
        parseFloat(document.querySelector('#panetoneFruitCTotal').innerHTML) +
        parseFloat(document.querySelector('#dijonCTotal').innerHTML) +
        parseFloat(document.querySelector('#pestoCTotal').innerHTML) +
        parseFloat(document.querySelector('#garlicCTotal').innerHTML)
    );
    
    var shipping = (totalProducts * 0.05);
    if (shipping < 8.0) {
        shipping = 8.0;
    }
    
    var total = (totalProducts + shipping);

    document.querySelector('#shipping').innerHTML = shipping.toFixed(2);
    document.querySelector('#cartTotal').innerHTML = total.toFixed(2);
};
