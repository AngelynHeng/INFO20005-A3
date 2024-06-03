// reset scroll position between pages when users navigate back and forth
if (history.scrollRestoration) {
    history.scrollRestoration = "manual";

  }

window.onbeforeunload = function () {
    window.location.reload();
    window.scrollTo(0, 0);
  }



// Code to direct users to empty or shopping cart page w content depending on local storage length


document.getElementById("shopping-cart-icon").addEventListener("click", function(){

        console.log(localStorage.length);

        // if localstorage.length == 0 means shopping cart is empty so user is redirected to empty-shopping-cart page
        if (localStorage.length == 0){
        
            window.location.href = "empty-shopping-cart.html" ;
        
        // if localstorage.length !== 0 means shopping cart is NOT empty so user is redirected to cart page with items 
        } else if (localStorage.length !== 0){
        
            window.location.href = "shopping-cart.html";
        }
})


// directs user to product page if element clicked is <img> 
document.addEventListener("click", myFunction);

function myFunction(e) {

    var clickElement = e.target.nodeName;
    var clickElementParent = e.target.parentElement;
    clickElementString = clickElement.toString();

    if(clickElementString == "IMG"){
       
        // only redirects if <img> class is clickable--product
        if (clickElementParent.className == "product clickable--product"){
            
            // Getting id of button and direct users to respective product details page
            if(clickElementParent.childNodes[5].id == "201"){
                window.location.href="product-page-201.html";
            } else if (clickElementParent.childNodes[5].id == "202"){
                window.location.href="product-page-202.html";
            }
        }
    }   
}

