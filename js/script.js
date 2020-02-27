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

function increase() {
    var quantity = document.querySelector(`#${this.getAttribute('product')}`).value;
    var item = document.querySelector(`#${this.getAttribute('refreshValue')}`);
    quantity++;
    changeItemTotal(quantity, item);
    document.querySelector(`#${this.getAttribute('product')}`).value = quantity;
}

function decrease() {
    var quantity = document.querySelector(`#${this.getAttribute('product')}`).value;
    var item = document.querySelector(`#${this.getAttribute('refreshValue')}`);
    if(quantity <= 1) {
        quantity = 1;
    }
    else {
        quantity--
        changeItemTotal(quantity, item)
    }
    document.querySelector(`#${this.getAttribute('product')}`).value = quantity;
}

function quantityInput() {
    if (this.value < 1) {
        this.value = 1;
    }
    var quantity = this.value;
    var item = document.querySelector(`#${this.getAttribute('refreshValue')}`);
    changeItemTotal(quantity, item);    
}

function showHideCart() {
    document.querySelector('#cart').classList.toggle('hide');
    document.querySelector('.showCart').classList.toggle('hide');
}

function changeItemTotal(quantity, item) {
    var price = parseFloat(item.getAttribute('price'));
    var total = quantity * price;
    item.innerHTML = total.toFixed(2);
}