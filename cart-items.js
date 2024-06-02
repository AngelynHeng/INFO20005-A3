    //remove 201 

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
    <button class="smaller_button" id="201-remove"> Remove </button>
    
    </div>
    
    `
    
    document.getElementById("cart-contents").append(cartItem201);

    document.getElementById("201-remove").addEventListener("click", function() {

        console.log("remove 201");
        document.getElementById("cart-contents").removeChild(cartItem201);
        removeFromCart('201');
    
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
    <button class="smaller_button" id="202-remove"> Remove </button>

    </div>

    `

    document.getElementById("cart-contents").append(cartItem202);

    document.getElementById("202-remove").addEventListener("click", function() {

        document.getElementById("cart-contents").removeChild(cartItem202);
        removeFromCart('202');
    
    })


}

    
    