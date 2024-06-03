
// make sure window is scrolled to the top even when user navigates back to previous page

history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


//based on local storage data stored in cart.js variable is changed 

var display201 = "no"
var display202 = "no"

function removeFromCart(itemId){
    localStorage.setItem('cartStatus'+ itemId, '0');
}


//sets display for item 201 to yes if local storage is "1". No if local storage is "0"

if (localStorage.getItem("cartStatus" + "201") == "1")  {
    display201 = "yes";    
} else if ((localStorage.getItem("cartStatus" + "201") == "0")){
    display201 ="no";
}

//sets display for item 202 to yes if local storage is "1". No if local storage is "0"

if (localStorage.getItem("cartStatus" + "202") == "1")  {   
    display202 = "yes";    
} else if((localStorage.getItem("cartStatus"+ "202") == "0")){
    display202 = "no";
}


//if display 201 is yes then cart item code for item 201 is injected into html page
if (display201 == "yes"){
    let cartItem201 = document.createElement('div');
    cartItem201.classList.add("item__box");
    cartItem201.innerHTML = 
    `
    <div class="item__grid">
    
    <img src="Images/Product-image/201.png" class="cart__item__image">
    <p class="cart__item__name"> Digital Birthday Card </p>
    <p class="cart__item__price"> $10.00</p>
    <p class="cart__item__code" id="201"> No. 201</p>
    <button class="smaller-button" id="201-remove"> Remove </button>
    
    </div>
    
    `;
    // appends innherHTML to parent element already present in shopping cart page 
    document.getElementById("cart-contents").append(cartItem201);

    // function to remove cart item is triggered when button with id "201-remove" is clicked
    document.getElementById("201-remove").addEventListener("click", function() {

        document.getElementById("cart-contents").removeChild(cartItem201);
        //since item is removed from cart, display 201 is set back to 'no'
        display201= "no";
        //local storage data is also updated so that cart-item-201 is 0
        removeFromCart('201');

        //checks the amount of item in cart everytime an item is added. 
        // if item count is 1, makes sure price content and current-cart number is consistent 
        if (document.getElementById("cart-contents").childElementCount == 1){
            document.getElementById("price").innerHTML = "$10.00";
            document.getElementById("total-price").innerHTML = "$10.00";
            document.getElementById("current-cart").innerHTML = "[1]";
        }        
        
        // if item count is 0, cart is empty, local storage is cleared and page is redirected to empty-shopping-cart
        if (document.getElementById("cart-contents").childElementCount == 0){
            localStorage.clear();
            window.location.href= "empty-shopping-cart.html";
        }
    })
}

// same code and explanation as above but for item 202 
if (display202 == "yes"){

    let cartItem202 = document.createElement('div');
    cartItem202.classList.add("item__box");
    cartItem202.innerHTML = 
    `
    <div class="item__grid">

    <img src="Images/Product-image/202.png" class="cart__item__image">
    <p class="cart__item__name"> Digital Birthday Card </p>
    <p class="cart__item__price"> $10.00</p>
    <p class="cart__item__code" id="202"> No. 202</p>
    <button class="smaller-button" id="202-remove"> Remove </button>

    </div>

    `;
    document.getElementById("cart-contents").append(cartItem202);

    document.getElementById("202-remove").addEventListener("click", function() {
        document.getElementById("cart-contents").removeChild(cartItem202);
        display202= "no";
        removeFromCart('202');
        if (document.getElementById("cart-contents").childElementCount == 1){
            console.log("there is 2 items")
            document.getElementById("price").innerHTML = "$10.00";
            document.getElementById("total-price").innerHTML = "$10.00";
            document.getElementById("current-cart").innerHTML = "[1]";
        }        
        if (document.getElementById("cart-contents").childElementCount == 0){
            console.log("cart is empty");
            localStorage.clear();
            window.location.href= "empty-shopping-cart.html";
        }
    })
}

// checks item cart on load
// if item is 2 then price content and current-cart content is updated

if (document.getElementById("cart-contents").childElementCount == 2){
    console.log("there is 2 items");
    document.getElementById("price").innerHTML = "$20.00";
    document.getElementById("total-price").innerHTML = "$20.00";
    document.getElementById("current-cart").innerHTML = "[2]";
}

// when user clicks on "clear cart" on top right of the screen 

document.getElementById("clear-cart").addEventListener("click", function(){
    // clear ALL items that was in cart 
    document.getElementById("cart-contents").innerHTML = "";
    //check that child element count for parent element is == 0 
    if (document.getElementById("cart-contents").childElementCount == 0){
        //page is redirected to empty-cart-page
        window.location.href= "empty-shopping-cart.html"; 
    }
    //localstorage is cleared
    localStorage.clear();
})


// Redirect users to checkout page

document.getElementById("checkout-button").addEventListener("click", function(){
    // if both items are currently displayed in cart
    if(display201 == "yes" && display202 == "yes"){
        // redirecred to order-summarry-page with details of both items
        window.location.href= "order-summary-two.html";
    }
    // if only display 201 is yes 
    if(display201 == "yes" && display202 == "no"){
        // redirecred to order-summarry-page with item 201 detail
        window.location.href= "order-summary-201.html";
    }
    // if only display 202 is yes 
    if(display201 == "no" && display202 == "yes"){
        // redirecred to order-summarry-page with item 2012 detail
        window.location.href= "order-summary-202.html";
    }
})

