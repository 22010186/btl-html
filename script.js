// var cart = [];
import {cart} from './data.js';

window.onload = function () {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = headerHeight + 'px';
    var addBtn = document.querySelectorAll('.card .btn').forEach(function (btn) {
        btn.addEventListener('click', addToCart);
    });

    var cartBtn = document.querySelector('.fa-shopping-cart').addEventListener('click',showCart);
}



function addToCart(event) {
    event.preventDefault();
    var productContent = event.target.closest('.content');
    var productName = productContent.querySelector('h3').innerText;
    var productDescription = productContent.querySelector('.description').innerText;
    var productPrice = productContent.querySelector('.price').innerText;
    var starElements = productContent.querySelectorAll('.stars .fas.fa-star');
    var numberOfStars = starElements.length;

    console.log(productName, productDescription, productPrice, numberOfStars);

    cart.push({
        name: productName,
        description: productDescription,
        price: productPrice,
        stars: numberOfStars
    });

    console.log({
        name: productName,
        description: productDescription,
        price: productPrice,
        stars: numberOfStars
    });

}



function showCart(event){

    var header = document.querySelector('header');
    var miniCart = document.querySelector('.mini-cart');
    var iconBlock = document.querySelector('.icons');

    console.log(iconBlock.offsetHeight);

    var iconBlockWidth = iconBlock.offsetWidth;
    var headerHeight = header.offsetHeight;
    console.log("headerHeight: " + headerHeight + " iconBlockWidth: " + iconBlockWidth);
    miniCart.style.top = headerHeight + 'px';
    miniCart.style.width = (2.5 * iconBlockWidth) + 'px';
    miniCart.style.padding = '0px ' + 0.25*iconBlockWidth + 'px';

    
    if (miniCart.style.display === 'none' || miniCart.style.display === '') {
        miniCart.style.display = 'block';
        renderCartItems();
    } else {
        miniCart.style.display = 'none';
    }


}

function hideCart(event){
    var miniCard = document.querySelector('.mini-card');
    miniCard.style.display = 'none';
}


function renderCartItems() {
    var cardItemContainer = document.querySelector('.item-container');

    cardItemContainer.innerHTML = '';
    cart.forEach(function (item) {
        var cardItem = document.createElement('div');
        cardItem.classList.add('item');

        var image = document.createElement('img');
        image.src = 'https://picsum.photos/100/100?random=1';

        var productName = document.createElement('h3');
        productName.textContent = item.name;

        var productPrice = document.createElement('span');
        productPrice.classList.add('price');
        productPrice.textContent = item.price;

        cardItem.appendChild(image);
        cardItem.appendChild(productName);
        cardItem.appendChild(productPrice);

        cardItemContainer.appendChild(cardItem);
    });
}
