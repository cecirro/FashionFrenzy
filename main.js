const ITEMS = [
	{
		id: 1,
		name: 'New Balance 550',
		price: 15000,
		image: 'Figure/newb-1.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
		          <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>`
	},
	{
		id: 2,
		name: 'New Balance 550',
		price: 25000,
		image: 'Figure/newb-2.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
		  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{
		id: 3,
		name: 'New Balance 550',
		price: 15000,
		image: 'Figure/newb-3.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
		  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 4,
		name: 'New Balance 550',
		price: 15000,
		image: 'Figure/newb-4.jpg',
		qty:1,
		size:'12',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>`
		
	},


	{   id: 5,
		name: 'Air Jordan 1 Retro High ',
		price: 17500,
		image: 'Figure/nike-products-test.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 6,
		name: 'Jordan 4 Retro Thunder',
		price: 25500,
		image: 'Figure/nike-products-yellow.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
	  			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 7,
		name: 'Air Jordan 1 Retro High OG',
		price: 25500,
		image: 'Figure/nike-products-runner.jpg',
		qty:1,
		size:'12',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
		  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 8,
		name: 'Air Jordan 3 Retro',
		price: 15500,
		image: 'Figure/nike-products-high.jpg',
		qty:1,
		size:'10',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
		  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 9,
		name: 'COSMOGRAPH DAYTONA',
		price: 1000000,
		image: 'Figure/main-rolex-7 (3).jpg',
		qty:1,
		size: '40mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
	  			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},


	{   id: 10,
		name:'Yacht-Master 42',
		price: 3000000,
		image: 'Figure/main-rolex-8-shop.jpg',
		qty:1,
		size:'44mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
		
	},
	{   id: 11,
		name: 'ROLEX DATEJUST 14 MM',
		price: 15000000,
		image: 'Figure/main-rolex-9-shop.jpg',
		qty:1,
		size:'40mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 12,
		name: 'Rolex GMT-Master II',
		price: 4000000,
		image: 'Figure/main-rolex10-shop.jpg',
		qty:1,
		size:'39mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},

	{   id: 13,
		name: 'ICY MIAMI CUBAN CHAIN',
		price: 100000,
		image: 'Figure/icebox-1.jpg',
		qty:1,
		size:'25mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},


	{   id: 14,
		name:'RAISED PRONG MIAMI CUBAN NECKLACE ',
		price: 3000000,
		image: 'Figure/icebox-2.jpg',
		qty:1,
		size:'8.8mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 15,
		name: 'DIAMOND CUBAN BRACELET',
		price: 150000,
		image: 'Figure/icebox-3.jpg',
		qty:1,
		size:'10mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 16,
		name: 'SPIDER WEB DIAMOND PENDANT',
		price: 100000,
		image: 'Figure/icebox-4.jpg',
		qty:1,
		size:'5mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
  			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},
	{   id: 17,
		name: 'Supreme Bandana Hoodie ',
		price: 12000,
		image:'Figure/supreme-product-hoodie-men.png',
		qty:1,
		size:'Medium',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},

	{   id: 18,
		name: 'Supreme Insulated Iron-Tuff Jacket',
		price: 10000,
		image: 'Figure/supreme-product-hoodie3-men.png',
		qty:1,
		size:'X-Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},


	{   id: 19,
		name:'Supreme Brushed Grid Cardigan',
		price: 30000,
		image: 'Figure/supreme-product-jacket.png',
		qty:1,
		size:'X-large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 20,
		name: 'Supreme S Logo Red',
		price: 15000,
		image: 'Figure/supreme-product-hoodie.png',
		qty:1,
		size:'Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 21,
		name: 'DBTK UTILITY FLAP CROSSBODY BAG',
		price: 10000,
		image: 'Figure/dbtk-product-new-bag.png',
		qty:1,
		size:'30mm',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},
	{   id: 22,
		name:'DBTK WAFFLE L/S - BLACK',
		price: 30000,
		image: 'Figure/dbtk-product-new-tee.png',
		qty:1,
		size:'Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 23,
		name: 'DBTK ELEM MONTAGE TEE ',
		price: 15000,
		image: 'Figure/dbtk-product-new-tee2.png',
		qty:1,
		size:'Medium',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 24,
		name: 'ABKDBTK KNITTED PAISLEY SHORTS',
		price: 10000,
		image: 'Figure/dbtk-product-new-short.png',
		qty:1,
		size:'Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 			<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 25,
		name: 'Shrunk Racer jacket',
		price: 100000,
		image: 'Figure/ballensiaga-shop1.jpg',
		qty:1,
		size:'Medium',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},
	{   id: 26,
		name:'Logo cotton hoodie',
		price: 30000,
		image: 'Figure/ballensiaga-shop2.jpg',
		qty:1,
		size:'Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
  <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 27,
		name: 'ZIP-UP Hoodie - Blue',
		price: 1500000,
		image: 'Figure/bballensiaga-shop3.jpg',
		qty:1,
		size:'X-Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 28,
		name: 'Oversized Distressed Denim Jacket',
		price: 140000,
		image: 'Figure/ballensiaga-shop4.jpg',
		qty:1,
		size:'X-Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	},
	{   id: 29,
		name: 'IRON MAIDEN BOXY FIT ',
		price: 160000,
		image: 'Figure/bershka-shop1.jpg',
		qty:1,
		size:'Small',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
	
	},
	{   id: 30,
		name:'SHORT SLEEVE EMBROIDED PRINT',
		price: 32000,
		image: 'Figure/bershka-shop2.jpg',
		qty:1,
		size:'Large',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
	 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 31,
		name: 'STRIPED SWEATSHIRT WITH ZIP',
		price: 150000,
		image: 'Figure/bershka-shop3.jpg',
		qty:1,
		size:'Medium',
		star: `   <div class="star4" style="display: flex; flex-direction: row;">
 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
				</div>` 
		
	},
	{   id: 32,
		name: 'BIZARRAP FAUX LEATHER SHIRT ',
		price: 110000,
		image: 'Figure/bershka-shop4.jpg',
		qty:1,
		size:'Small',
			star: `   <div class="star4" style="display: flex; flex-direction: row;">
 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								<i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
								 <i class="fa-sharp fa-solid fa-star" style="color: #FFD43B;"></i>
					
				</div>` 
	},

   
]
/**          SHOPPING CART *  */
const openBtn = document.getElementById('open_cart_btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close_btn');
const backdrop = document.querySelector('.backdrop');
const itemsE1 = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const subtotalPrice= document.getElementById('subtotal_price')



let cart_data = []

openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart)

renderItems()
renderCartItems()

function openCart(){
	cart.classList.add('open');
	backdrop.style.display = 'block';
	setTimeout( () => {


	backdrop.classList.add('show');
}, 0)
}


function closeCart(){
	cart.classList.remove('open');
	backdrop.classList.remove('show');


	setTimeout(() => {
		backdrop.style.display ='none'
	}, 500)
}

// Add to Cart
function addToCart(productId) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "cart_operations.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    };

    const quantity = 1; // Default quantity to add to the cart
    const data = `product_id=${productId}&quantity=${quantity}`;
    xhr.send(data);
}




function addItem(idx, itemId){
	// Find same items
	const foundedItem = cart_data.find(item=> item.id.toString() === itemId.toString())
	if(foundedItem){
		//increase item qty
		increaseQty(itemId)
	}else{
      cart_data.push(ITEMS[idx])
	}
	  updateCart()
	  openCart()
}
// Remove cart Items

function removeCartItem(itemId){
	cart_data = cart_data.filter((item) => item.id != itemId)
	
	updateCart()
}

//Increase Qty
function increaseQty(itemId){
	cart_data = cart_data.map((item) =>
	item.id.toString() === itemId.toString() ? {...item, qty: item.qty +1}
     :item	
	) 
	updateCart()
}


//Decrease Qty
function decreaseQty(itemId){
	cart_data = cart_data.map(item => item.id.toString() === itemId.
	toString() ? {...item, qty: item.qty > 1 ? item.qty - 1: item.qty}
	:item
	)
	updateCart()
}


function calcItemsNum(){
	let itemsCount = 0

	cart_data.forEach((item) => (itemsCount += item.qty))

	itemsNum.innerText = itemsCount
}

function calcSubtotalPrice() {
	let subtotal =0
	cart_data.forEach((item) => (subtotal += item.price * item.qty))

	subtotalPrice.innerText = subtotal
}
//render items
function renderItems() {
	ITEMS.forEach((item, idx) => {
		const itemE1 = document.createElement('div')
		itemE1.classList.add('item')
		itemE1.onclick = () => addItem(idx, item.id)
		itemE1.innerHTML = 	`
		     <img src="${item.image}"/>
			 
			 <span style="display:flex; justify-content:center; align-items:center; " >
			 <a href="Add-to-cart-product-of_Ballenciaga.html">
			 <span class="material-symbols-outlined" style="display:inline-block; justify-content:center; align-items:center; font-size:1.2em; margin-top:5px; ">info</span>
			 
			 </a>${item.name}</span>
			 ${item.star}
			 <span>size: ${item.size}</span>
		
			 <strong>₱ ${item.price}</strong>
		     <button onclick="addToCart(1)">Add to Cart</button>

		`
	    itemsE1.appendChild(itemE1)
    })
	}

	//display cart item
	function renderCartItems(){

		// Rermove all cart items
		cartItems.innerHTML= ''
        //Add New Items

		cart_data.forEach(item=>{
			const cartItem = document.createElement('div')
			cartItem.classList.add('cart_item')
			cartItem.innerHTML = `
			<div class = "remove_item" onclick="removeCartItem(${item.id})">
			<span>&times;</span> </div>
			<div class="item_img">
			<img src="${item.image}"/></div>
			<div class="item_details">
			<p>${item.name}</p>
			<span>size:${item.size}</span>

			<div class="qty">
			<strong>₱ ${item.price}</strong>
			<span onclick ="decreaseQty(${item.id})">-</span>
			<strong>${item.qty}</strong>
			<span onclick ="increaseQty(${item.id})">+</span>
			</div>
			</div>
			`			
				
		    cartItems.appendChild(cartItem)
		})
	}
     
	function updateCart(){
		// rerender cart items with updated data
		renderCartItems()
       //update items number cart
		calcItemsNum()
         //update Subtotal Price
		calcSubtotalPrice() 
		
	}










	function toggleMenu() {
		var menu = document.getElementById("menu");
		menu.classList.toggle("active");
	  }






















function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

$('#ripple').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
$('#ripples').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.001,
});
$('#rippled').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.001,
});
