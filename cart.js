var display201 = "no"
var display202 = "no"

function removeFromCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '0');

}



if (localStorage.getItem("cartStatus" + "201") == "1")  {

    document.getElementById("201-add-small").innerHTML = 'added to cart'
    document.getElementById("201-add").innerHTML = 'added to cart'
    
} else if ((localStorage.getItem("cartStatus" + "201") == "0")){

    document.getElementById("201-add-small").innerHTML = 'add to cart'
    document.getElementById("201-add").innerHTML = 'add to cart'
}

if (localStorage.getItem("cartStatus" + "202") == "1")  {
    
    document.getElementById("202-add-small").innerHTML = 'added to cart'
    document.getElementById("202-add").innerHTML = 'added to cart' 
    
}else if((localStorage.getItem("cartStatus"+ "202") == "0")){

    document.getElementById("202-add-small").innerHTML = 'add to cart'
    document.getElementById("202-add").innerHTML = 'add to cart'
}



function addToCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '1');
    console.log(addedToCart)

}

if (addToCart == "yes"){

    document.getElementById("202-add").innerHTML= "Added to Cart"

}


// Item 202

document.getElementById("202-add").addEventListener("click", function() {

    document.getElementById("202-add").innerHTML= "Added to Cart"
    addToCart('202');

});



//item 202 small

document.getElementById("202-add-small").addEventListener("click", function(){

    document.getElementById("202-add-small").innerHTML= "Added to Cart";
    console.log("hello small");

})


// item 201 

document.getElementById("201-add").addEventListener("click", function() {

    document.getElementById("201-add").innerHTML= "Added to Cart"
    addToCart('201');

});

//item 202 small 

document.getElementById("201-add-small").addEventListener("click", function(){

    document.getElementById("201-add-small").innerHTML= "Added to Cart";
    console.log("hello small");

})

