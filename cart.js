// make sure window is scrolled to the top even when user navigates back to previous page

history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// by default shopping cart does not display any item so both var are set to 0 
var display201 = "no";
var display202 = "no";

//function to set var in localstorage to '0' when 'remove' button is clicked
function removeFromCart(itemId){
    localStorage.setItem('cartStatus'+ itemId, '0');
}

//function sets local storage item linked to itemId to 1 when add to cart button is clicked
function addToCart(itemId){
    localStorage.setItem('cartStatus'+ itemId, '1');
}



// when user clicks on element with id "201-add" button style is changed immediately on click
//2 different size of buttons so each item '201' and '202' has 2 sets of code to ensure code is consistent and responsive
document.getElementById("201-add").addEventListener("click", function() {
    document.getElementById("201-add").innerHTML= "Added to Cart";
    document.getElementById("201-add").style.backgroundColor = "var(--darker-red)";
    addToCart('201');
});

//item 202 small button
document.getElementById("201-add-small").addEventListener("click", function(){
    document.getElementById("201-add-small").innerHTML= "Added to Cart";
    document.getElementById("201-add-small").style.backgroundColor = "var(--darker-red)";
    addToCart('201');
})


// Item 202
document.getElementById("202-add").addEventListener("click", function() {
    document.getElementById("202-add").innerHTML= "Added to Cart";
    document.getElementById("202-add").style.backgroundColor = "var(--darker-red)";
    addToCart('202');
});



//item 202 small button
document.getElementById("202-add-small").addEventListener("click", function(){
    document.getElementById("202-add-small").innerHTML= "Added to Cart";
    document.getElementById("202-add-small").style.backgroundColor = "var(--darker-red)";
    addToCart('202');
})


// code ensures that "added to cart" style is applied and consistent even if page is refreshed or when user navigate between pages
if (localStorage.getItem("cartStatus" + "201") == "1")  {
    document.getElementById("201-add-small").innerHTML = 'added to cart';
    document.getElementById("201-add-small").style.backgroundColor = "var(--darker-red)";
    document.getElementById("201-add").style.backgroundColor = "var(--darker-red)"; 
    document.getElementById("201-add").innerHTML = 'added to cart'   
}

if (localStorage.getItem("cartStatus" + "202") == "1")  {  
    document.getElementById("202-add-small").innerHTML = 'added to cart';
    document.getElementById("202-add-small").style.backgroundColor = "var(--darker-red)";
    document.getElementById("202-add").style.backgroundColor = "var(--darker-red)"; 
    document.getElementById("202-add").innerHTML = 'added to cart' ;
}
