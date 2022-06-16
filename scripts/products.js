

data=[ {
    "id": "6",
    "Image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17743840/2022/4/14/8759f49a-ac2c-48ed-a15f-989d87a267bd1649918786474-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-5.jpg ~ https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17743840/2022/4/14/bb7af3cf-403f-475d-967e-f1edb5719ead1649918786485-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-4.jpg ~ https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17743840/2022/4/14/22f56f9e-72f0-408f-8de1-668923e4b8421649918786494-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-3.jpg ~ https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17743840/2022/4/14/5e293ca3-1413-4fb4-a0fd-ffcab037a7511649918786503-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-2.jpg ~ https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17743840/2022/4/14/63c5d816-55b5-4397-b9ba-f64b3e569acf1649918786512-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-1.jpg",
    "Name": "Nike ~ Men Purple & Pink Brand Logo Printed ASM NSW Pure Cotton Sports T-shirt",
    "Price": "951",
    "Discripation": "Product design detail; Purple and pink Tshirt for men Brand logo printed Regular length Round neck Short, regular sleeves Knitted cotton fabric",
    "rating": "4.5",
    "category": "t-sirts"
  },
]
let products_data=JSON.parse(localStorage.getItem('products_data'))

let display_products=(data)=>{
    console.log(data)
    data.forEach(element => {
        // console.log(element.Image.trim(" ").split("~"))

        let img_array=element.Image.trim(" ").split("~")
        let img_box=document.getElementById("image")
        for(let i=0;i<img_array.length;i++){
            let div=document.createElement("div")
            let img=document.createElement("img")
            img.setAttribute("class",'products_img')
            img.src=img_array[i]
            div.append(img)
            img_box.append(div)
        }
        let brand_data=element.Name;
        let name_arr=brand_data.trim(" ").split("~")
        
        let div=document.createElement('div')
        let h4_brand=document.createElement("h1")
        h4_brand.innerText=name_arr[0];

        let p_name=document.createElement("p")
        p_name.innerText=name_arr[1];
        let r_div=document.createElement("div")
        let rating=document.createElement("h4")
        rating.innerHTML=`${element.rating}<span class="fa fa-star checked"></span>  ${element.rating*10}k   <span id="ratings">Ratings</span>`
        r_div.append(rating)
        r_div.setAttribute("id",'ratingbox')


        div.append(h4_brand,p_name,r_div)
        document.getElementById('productsinfo').append(div)

        let div_price=document.createElement('div')
        let price=document.createElement('h3')
        let discounts=Math.floor(Math.random()* 40) + 10;
        let price_max=Math.floor(element.Price*(100+discounts)/100)
        console.log(price_max)
        price.innerHTML=`<span>Rs.</span>${element.Price} <span id="max_price">Rs.${price_max}</span> <span id="discounts">(${discounts}%-Off)</span>`

        div_price.append(price)
        document.getElementById("price_data").append(div_price)

        document.getElementById("siza_chart").innerHTML=`<div ><h4 id="siza_chartdis"><span>SELECT SIZE</span><span></span></span><span id="siza_charts">siza chart ></span></h4></div><div id='select-siza'>
            <div id="S" class="siza"><p>S</p></div>
            <div id="M"class="siza"><p>M</p></div>
            <div id="L" class="siza"><p>L</p></div>
            <div id="XL" class="siza"><p>XL</p></div>
        </div>`

        document.getElementById("button").innerHTML=`<div id="addtocart"><span id="bag"><span><img id="img_id" src="../img/iconly-essential-icons.png" alt=""></span><span>Add to cart</span></span></div>
        <div id="wishlist"><span id="bag"><span><img id="img_id" src="../img/whislist (3).png" alt=""></span><span>wishlist</span></span></div>`

        document.getElementById("delivery-option").innerHTML=`<div id="delid"><sapn><h4>DELIVERY OPTIONS</h4></sapn><span ><img id="img_id" src="../img/delivery (1).png" alt=""></span></div>
            <form>
                <input type="text" placeholder="Enter pincode" id="pincode">
                <input type="submit"id="pincode-submit" value="check">
                <div id="valid"></div>
            </form>
        <div><p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p></div>`;

        document.getElementById("extra_info").innerHTML=`<div>
        <div>100% Original Products</div>
        <div>Pay delivery might be available</div>
        <div>Easy 30 days returns and exchanges</div>
        <div>Try & Buy might be available</div>
    </div>`;

    document.getElementById("best-offers").innerHTML=`<div>BEST OFFERS <span></span></div>
    <div>
        <div id="delid"><span><h2>Best price: </h2></span><span><img id="img_id" src="../img/tag.png" alt=""></span></div>
        <div id="coupon-discounts">
            <ul>
                <li>Coupon Discount: Rs. 50 off (check cart for final savings)</li>
                <li>Applicable on: Orders above Rs. 100 (only on first purchase)</li>
                <li>Coupon code: MYNTRA50</li>
            </ul>
            <div id="off"><p class="offers_e">View Eligible Products</p></div>
        </div>
        <div id="banks-offers">
            <div id="icice-bank">
                <h4>10% Instant Discount on ICICI Bank Credit and Debit Cards</h4>
                <ul><li>Min spend Rs 3,500. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>0% Instant Discount on Axis Bank Credit Cards</h4>
                <ul><li>Min spend Rs 3,000. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>Flat Rs 150 Cashback on Paytm Wallet and Postpaid</h4>
                <ul><li>Min spend Rs 1,500. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>15% Cashback upto Rs 750 on ZestMoney.</h4>
                <ul><li>Shop with 0% Interest* EMIs. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>

            <div id="icice-bank">
                <h4>10% Instant Discount + 5% Unlimited Cashback</h4>
                <ul><li>Shop with Flipkart Axis Bank Credit Card; Min Spend Rs 3000</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>EMI option available</h4>
                <ul><li>EMI starting from Rs.15/month</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>

        </div>
    </div>`

    document.getElementById("proucts-details").innerHTML=`<div><h4>PRODUCT DETAILS </h4><span></span></div><div><P>${element.Discripation}</P></div>`

// add to cart part
document.getElementById("addtocart").addEventListener("click",function(){
    addtocartfun(element)
})
//wish-list
document.getElementById("wishlist").addEventListener("click",function(){
    wishlistfunc(element)
})
document.getElementById('pincode-submit').addEventListener('click',function(){
    pincodecheck()
})
});
}
// *******************************
display_products(data)

//add to cart function 
let cart =JSON.parse(localStorage.getItem('cart')) ||[]
function addtocartfun(element){
    let ID=element.id;
    let count=0;
    cart.forEach(function(ele){
        if(ele.id==ID){
            count++;
        }
    })
    if(cart.length==count){
        alert("iteam already present in cart")
    }else{
        cart.push(element)
    }
}


//whishlist
let wishlist=JSON.parse(localStorage.getItem('wishlist'))||[]
function wishlistfunc(element){
    wishlist.push(element);

    localStorage.setItem('wishlist',JSON.stringify(wishlist))
}
//pincode check
function pincodecheck(){
    event.preventDefault()
    let pin=document.getElementById("pincode").value;
    if(pin.length==6){
        // alert("pin is valid")
        document.getElementById("valid").innerHTML=null
        document.getElementById("valid").innerHTML=`<h4 class="check_pin">pin-code valid</h4>`
    }
    else{
        // alert("pin not valid")
        document.getElementById("valid").innerHTML=null
        document.getElementById("valid").innerHTML=`<h4 class="check_pin">Invalid pin-code</h4>`
    }
}

//bank_offers
document.getElementById("off").addEventListener("click",function(){
    window.location.href="banksoffers.html"
})
//siza selection 
let siza=document.getElementById("select-siza").children;
let order=JSON.parse(localStorage.getItem('order-siza'))||[]
function chose_siza(){
    order=JSON.parse(localStorage.getItem('order'))||[]
    const siza={
        Siza:this.id
    }
    order.push(siza)
    console.log(order)
}
for (let ele of siza) {
    ele.addEventListener("click",chose_siza)
}
