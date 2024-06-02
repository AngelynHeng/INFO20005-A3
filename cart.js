// Add to cart function for product 201 Desktop resolution


function addToCart(itemId){

    localStorage.setItem('cartStatus'+ itemId, '1');

}


// Item 202

document.getElementById("202-add").addEventListener("click", function() {

    document.getElementById("202-add").innerHTML= "Added to Cart"
    addToCart('202');
});



//item 202 small

document.getElementById("202-add-small").addEventListener("click", function(){

    document.getElementById("202-add-small").innerHTML= "Added to Cart"
    console.log("hello small")
})


// item 201 

document.getElementById("201-add").addEventListener("click", function() {

    document.getElementById("201-add").innerHTML= "Added to Cart"
    addToCart('201');
});

//item 202 small 

document.getElementById("201-add-small").addEventListener("click", function(){

    document.getElementById("201-add-small").innerHTML= "Added to Cart"
    console.log("hello small")
})

