document.querySelectorAll('.increase').forEach(item => {
    item.addEventListener('click', increase);
});

document.querySelectorAll('.decrease').forEach(item => {
    item.addEventListener('click', decrease);
});

function increase(ev) {
    var product = ev.target.getAttribute('product');
    console.log(product);
    var quantity = document.querySelector(`#${product}`).value;
    quantity++
    document.querySelector(`#${product}`).value = quantity;
}

function decrease(ev) {
    var product = ev.target.getAttribute('product');
    var quantity = document.querySelector(`#${product}`).value;
    if(quantity == 1) {
        quantity = 1;
    }
    else {
        quantity--
    }
    document.querySelector(`#${product}`).value = quantity;
}