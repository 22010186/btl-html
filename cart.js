var cart;

window.onload = function () {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = headerHeight + 'px';
    
}

cart = JSON.parse(localStorage.getItem("cart"));
