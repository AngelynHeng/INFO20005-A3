var display201 = "no"
var display202 = "no"

function removeFromCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '0');

}



if (localStorage.getItem("cartStatus" + "201") == "1")  {

    document.getElementById("201-add-small").innerHTML = 'added to cart'
    document.getElementById("201-add-small").style.backgroundColor = "var(--darker-red)";
    document.getElementById("201-add").style.backgroundColor = "var(--darker-red)"; 
    document.getElementById("201-add").innerHTML = 'added to cart'
    
}

if (localStorage.getItem("cartStatus" + "202") == "1")  {
    
    document.getElementById("202-add-small").innerHTML = 'added to cart'
    document.getElementById("202-add-small").style.backgroundColor = "var(--darker-red)";
    document.getElementById("202-add").style.backgroundColor = "var(--darker-red)"; 
    document.getElementById("202-add").innerHTML = 'added to cart' 
    
}

function addToCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '1');

}

if (addToCart == "yes"){

    document.getElementById("202-add").innerHTML= "Added to Cart"

}


// item 201 

document.getElementById("201-add").addEventListener("click", function() {
    
    document.getElementById("201-add").innerHTML= "Added to Cart"
    document.getElementById("201-add").style.backgroundColor = "var(--darker-red)";
    addToCart('201');

});

//item 202 small 

document.getElementById("201-add-small").addEventListener("click", function(){

    document.getElementById("201-add-small").innerHTML= "Added to Cart";
    document.getElementById("201-add-small").style.backgroundColor = "var(--darker-red)";
    console.log("hello small");

})


// Item 202

document.getElementById("202-add").addEventListener("click", function() {

    document.getElementById("202-add").innerHTML= "Added to Cart"
    document.getElementById("202-add").style.backgroundColor = "var(--darker-red)";
    addToCart('202');

});



//item 202 small

document.getElementById("202-add-small").addEventListener("click", function(){

    document.getElementById("202-add-small").innerHTML= "Added to Cart";
    document.getElementById("202-add-small").style.backgroundColor = "var(--darker-red)";
    console.log("hello small");

})


