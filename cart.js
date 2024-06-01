
let newCartFlex201 = document.createElement('div');
newCartFlex201.classList.add("item__box");
newCartFlex201.innerHTML = 

`
<div class="item__grid">

<img src="Images/Product-image/201.png" class="cart__item__image">
<p class="cart__item__name"> Digital Birthday Card </p>
<p class="cart__item__price"> $10.00</p>
<p class="cart__item__code" id="201"> No. 201</p>
<button class="smaller_button" id="remove"> Remove </button>

</div>

`

document.getElementById("test").append(newCartFlex201)


// Inserting Element for Card item 202


let newCartFlex202 = document.createElement('div');
newCartFlex202.classList.add("item__box");
newCartFlex202.innerHTML = 

`
<div class="item__grid">

<img src="Images/Product-image/202.png" class="cart__item__image">
<p class="cart__item__name"> Digital Birthday Card </p>
<p class="cart__item__price"> $10.00</p>
<p class="cart__item__code" id="202"> No. 202</p>
<button class="smaller_button" id="remove"> Remove </button>

</div>

`

document.getElementById("test").append(newCartFlex202);

