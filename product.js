// reset scroll position between pages when users navigate back and forth
if (history.scrollRestoration) {
    console.log("history scroll")
    history.scrollRestoration = "manual";

  }

window.onbeforeunload = function () {
    console.log("window onbeforeload")
    window.location.reload();
    window.scrollTo(0, 0);
  }


// Code to direct users to empty or shopping cart page w content depending on local storage length


document.getElementById("shopping-cart-icon").addEventListener("click", function(){

        console.log(localStorage.length);

        if (localStorage.length == 0){
        
            window.location.href = "empty-shopping-cart.html" ;

        } else if (localStorage.length !== 0){

            window.location.href = "shopping-cart.html";
        }
})



document.addEventListener("click", myFunction);

function myFunction(e) {

    var clickElement = e.target.nodeName;
    var clickElementParent = e.target.parentElement;
    clickElementString = clickElement.toString();

    if(clickElementString == "IMG"){
       
        
        if (clickElementParent.className == "product clickable--product"){
            
            // Getting id of button (childNodes[7])

            if(clickElementParent.childNodes[5].id == "201"){

                console.log("page 201");
                window.location.href="product-page-201.html"

            } else if (clickElementParent.childNodes[5].id == "202"){

                console.log(" page 202")
                window.location.href="product-page-202.html"
            }
            

    }
}
}
