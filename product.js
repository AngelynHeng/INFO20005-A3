if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

document.addEventListener("click", myFunction);

function myFunction(e) {

    var clickElement = e.target.nodeName;
    var clickElementParent = e.target.parentElement;
    clickElementString = clickElement.toString();

    if(clickElementString == "IMG"){
       
        
        if (clickElementParent.className == "product clickable--product"){
            
            // Getting id of button (childNodes[7])

            if(clickElementParent.childNodes[7].id = "201"){

                console.log("page 201");
                window.location.href="product-page-201.html"

            }else if (clickElementParent.childNodes[7].id = "202"){

                console.log(" page 202")
                window.location.href="product-page-202.html"
            }
            

    }
}
}
