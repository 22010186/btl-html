import { filteringData } from './data.js';

window.onload = function () {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('aside').style.top = headerHeight + 'px';
    document.querySelector('main').style.paddingTop = headerHeight + 'px';
    var asideWidth = document.querySelector('aside').offsetWidth;
    document.querySelector('#container').style.marginLeft = asideWidth + 'px';
    show();
}

var cart = [];
var products = filteringData;
var chooseCategory = "All";
var search = "";

console.log(products);

function filterProduct(event){
    event.preventDefault();
    const category = document.getElementById('category').value;
    const searchTerm = document.getElementById('searchTerm').value;

    console.log('Category:', category);
    console.log('Search Term:', searchTerm);

    filteringData = filteringData.filter(function(product){
        if(category === 'All'){
            return product.description.includes(searchTerm);
        }else{
            return product.type === category && product.description.includes;
        }
    });

    console.log(products);

    show();

    return false;

}


function show() {
    var container = document.querySelector('#container');
    container.innerHTML = '';
    
    for(var i = 0; i < products.length; i++) {
        (function(index) {
            var item = document.createElement('div');
            item.classList.add('card');
        
            var heartIcon = document.createElement('i');
            heartIcon.classList.add('fas', 'fa-heart');
            heartIcon.id = 'heart-icon';
            item.appendChild(heartIcon);
        
            var eyeIcon = document.createElement('i');
            eyeIcon.classList.add('fas', 'fa-eye');
            eyeIcon.id = 'eye-icon';
            item.appendChild(eyeIcon);
            
            var image = document.createElement('img');
            image.src = 'https://picsum.photos/600/500?random=1';
            item.appendChild(image);
            
            var name = document.createElement('h3');
            name.classList.add('name');
            name.textContent = products[index].name;
            item.appendChild(name);
        
            var type = document.createElement('span');
            type.classList.add('type');
            type.textContent = products[index].type;
            item.appendChild(type);
        
            var starsNumber = products[index].stars;
            var starsContainer = document.createElement('div');
            starsContainer.classList.add('stars');
            
            for(var j = 0; j < starsNumber; j++) {
                var starIcon = document.createElement('i');
                starIcon.classList.add('fas', 'fa-star');
                starsContainer.appendChild(starIcon);
            }
            item.appendChild(starsContainer);
        
            var description = document.createElement('p');
            description.classList.add('description');
            description.textContent = products[index].description;
            item.appendChild(description);
        
            var buyBtn = document.createElement('button');
            buyBtn.classList.add('buy-btn');
            buyBtn.addEventListener('click', function() {
                addToCart(index);
            });
        
            var price = document.createElement('p');
            price.classList.add('price');
            price.textContent = products[index].price + ' $';
            buyBtn.appendChild(price);
        
            item.appendChild(buyBtn);
        
            container.appendChild(item);
        })(i);
    }
}


function addToCart(index){
    cart.push(products[index]);
    localStorage.setItem("cart",JSON.stringify(cart));
    
}
