let carts=document.querySelectorAll('.trans');

let products = [
	{
		name:'Te-shirt',
		tag:'tshirt',
		price:14,
		incart: 0

	},
	{
	name:'Sweatshirt',
	tag:'Sweatshirt',
	price:24,
	incart:0
	},
	{
	    name:'Te-shirt',
		tag:'tshirt',
		price:14,
		incart: 0
	},
	{
	name:'jacket',
	tag:'jacket',
	price:34,
	incart:0
	
	},
	{
     name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	    name:'Te-shirt',
		tag:'tshirt',
		price:24,
		incart: 0
	},
	{
	name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	name:'Sweatshirt',
	 tag:'Sweatshirt',
	 price:24,
	 incart:0
	},
	{
	 name:'Te-shirt',
		tag:'tshirt',
		price:14,
		incart: 0
	}
];

for(let i=0;i<carts.length;i++){
	carts[i].addEventListener('click',()=>{
	cartNumbers(products[i]);
	 totalcost(products[i]);
	})
}

function cartNumbers(product){

let productNumbers=localStorage.getItem('cartNumbers');


   productNumbers = parseInt(productNumbers);
   if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
	}else{localStorage.setItem('cartNumbers', 1);
	}
	
	setItems(product);

}
function setItems(product){
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);

if(cartItems !=null){
   if(cartItems[product.tag]== undefined){
		  cartItems = {
				...cartItems,
				[product.tag]:product
		  }
   }
   
 cartItems[product.tag].incart+=1; 
 } else {
 product.incart=1;
 cartItems = {
	[product.tag]:product
 }
 }




localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalcost(product){
   let cartcost = localStorage.getItem('totalcost');
    if(cartcost != null){
		cartcost = parseInt (cartcost);
		localStorage.setItem("totalcost",cartcost + product.price);
	} else {
		localStorage.setItem("totalcost",product.price);
	}

}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalcost');
	if(cartItems && productContainer){
		productContainer.innerHTML='';
		Object.values(cartItems).map(item=>{
		productContainer.innerHTML+= 
		`<div class="product"> 	
		<ion-icon name="close-circle"></ion-icon>
		
		<span> ${item.name}</span>
		</div>
		<div class= "price">${item.price}</div>
		<div class ="quantity">

		<span>${item.incart}</span>
		
		</div>
		<div class="total"> $${item.incart*item.price}</div>
		
		`;
	
		 
		});
		productContainer.innerHTML+=`
		<div class ="basketTotalContainer">
		<h4 class= "basketTotalTitle">
		Basket Total </h4>
		<h4 class ="basketTotal">
		$${cartCost} </h4>

		`;

	}

}



displayCart();