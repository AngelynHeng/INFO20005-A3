
document.addEventListener("click", myFunction);

function myFunction(e) {

    var clickElement = e.target.nodeName;
    var imgSource = e.target.src;
    clickElementString = clickElement.toString();
    console.log(clickElement);

    if(clickElementString == "IMG"){
       
        console.log("YES");

        let imgSrc = {

            source: imgSource

        };

        let imgSrcStringify = JSON.stringify(imgSrc)
        localStorage.setItem('imgSrc', imgSrcStringify);




        window.location.href="product-page.html"


    }else {

        console.log("No")

    }


}