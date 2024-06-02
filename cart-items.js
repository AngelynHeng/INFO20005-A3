history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


var display201 = "no"
var display202 = "no"

function removeFromCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '0');

}



if (localStorage.getItem("cartStatus" + "201") == "1")  {

    display201 = "yes"; 
    
} else if ((localStorage.getItem("cartStatus" + "201") == "0")){

    display201 ="no"
}

if (localStorage.getItem("cartStatus" + "202") == "1")  {
    
    display202 = "yes"; 
    
} else if((localStorage.getItem("cartStatus"+ "202") == "0")){

    display202 = "no";
}


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
    
    `
    
    document.getElementById("cart-contents").append(cartItem201);

    console.log(document.getElementById("cart-contents").childElementCount)

    document.getElementById("201-remove").addEventListener("click", function() {

        document.getElementById("cart-contents").removeChild(cartItem201);
        display201= "no";
        removeFromCart('201');

        if (document.getElementById("cart-contents").childElementCount == 1){
            console.log("there is 2 items")
            document.getElementById("price").innerHTML = "$10.00"
            document.getElementById("total-price").innerHTML = "$10.00"
            document.getElementById("current-cart").innerHTML = "[1]"
        }        
        

        console.log(document.getElementById("cart-contents").childElementCount)
        if (document.getElementById("cart-contents").childElementCount == 0){

            console.log("cart is empty")
            localStorage.clear()
            window.location.href= "empty-shopping-cart.html"
        
        }
    
    })


}


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

    `

    document.getElementById("cart-contents").append(cartItem202);

    console.log(document.getElementById("cart-contents").childElementCount)

    document.getElementById("202-remove").addEventListener("click", function() {

        document.getElementById("cart-contents").removeChild(cartItem202);
        display202= "no";
        removeFromCart('202');

        if (document.getElementById("cart-contents").childElementCount == 1){
            console.log("there is 2 items")
            document.getElementById("price").innerHTML = "$10.00"
            document.getElementById("total-price").innerHTML = "$10.00"
            document.getElementById("current-cart").innerHTML = "[1]"
        }        
        

        console.log(document.getElementById("cart-contents").childElementCount)

        if (document.getElementById("cart-contents").childElementCount == 0){

            console.log("cart is empty")
            localStorage.clear()
            window.location.href= "empty-shopping-cart.html"
        
        }
    
    })


}

// Updates total price 

if (document.getElementById("cart-contents").childElementCount == 2){
    console.log("there is 2 items")
    document.getElementById("price").innerHTML = "$20.00"
    document.getElementById("total-price").innerHTML = "$20.00"
    document.getElementById("current-cart").innerHTML = "[2]"
}

// Redirect user to empty shopping cart page whenever cart page is empty 

document.getElementById("clear-cart").addEventListener("click", function(){

    document.getElementById("cart-contents").innerHTML = "";
    if (document.getElementById("cart-contents").childElementCount == 0){

        window.location.href= "empty-shopping-cart.html"
    
    }
    localStorage.clear();

})


// Redirect users to checkout page

document.getElementById("checkout-button").addEventListener("click", function(){

    if(display201 == "yes" && display202 == "yes"){
        window.location.href= "order-summary-two.html";
    }
    
    if(display201 == "yes" && display202 == "no"){
        window.location.href= "order-summary-201.html";
    }
    
    if(display201 == "no" && display202 == "yes"){
        window.location.href= "order-summary-202.html";
    }

})

