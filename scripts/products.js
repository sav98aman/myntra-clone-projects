

data=[{"name": "DKNY Unisex Black & Grey Printed Medium Trolley Bag", "sku": "10017413", "mpn": "10017413", "price": "11745", "in_stock": true, "currency": "INR", "brand": "DKNY", "description": "Black and grey printed medium trolley bag, secured with a TSA lockOne handle on the top and one on the side, has a trolley with a retractable handle on the top and four corner mounted inline skate wheelsOne main zip compartment, zip lining, two compression straps with click clasps, one zip compartment on the flap with three zip pocketsWarranty: 5 yearsWarranty provided by Brand Owner / Manufacturer", "images": "http://assets.myntassets.com/assets/images/10017413/2020/3/6/0896e133-7c7c-4bca-a6a9-e58de74515211583495685498DKNYUnisexBlackGreyPrintedMediumTrolleyBag1.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/7cfd6b92-5b81-4ea1-940f-9f881f830f261583495685583DKNYUnisexBlackGreyPrintedMediumTrolleyBag2.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/40f5febb-c807-49d4-9e98-55b6ec43fdd81583495685652DKNYUnisexBlackGreyPrintedMediumTrolleyBag3.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/3398a3d6-f65d-4df6-b203-1f5a899e63791583495685728DKNYUnisexBlackGreyPrintedMediumTrolleyBag4.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/cd6df4c9-7aca-4210-a3d7-3d5df0c2aca31583495685808DKNYUnisexBlackGreyPrintedMediumTrolleyBag5.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/a4a97e77-f868-4014-8c59-2ef31fba72251583495685869DKNYUnisexBlackGreyPrintedMediumTrolleyBag6.jpg ~ http://assets.myntassets.com/assets/images/10017413/2020/3/6/e1a8792f-01a0-414d-9deb-4ba1688322b91583495685931DKNYUnisexBlackGreyPrintedMediumTrolleyBag7.jpg", "gender": "Unisex"}
]
let products_data=JSON.parse(localStorage.getItem('products_data'))

let display_products=(data)=>{
    
    data.forEach(element => {
        console.log(element)
        let img_array=data[0].images.split("~")
        let img_box=document.getElementById("image")
        for(let i=0;i<img_array.length-1;i++){
            let div=document.createElement("div")
            let img=document.createElement("img")
            img.setAttribute("class",'products_img')
            img.src=img_array[i]
            div.append(img)
            img_box.append(div)
        }
        let div=document.createElement('div')
        let h4_brand=document.createElement("h4")
        h4_brand.innerText=element.brand;

        let p_name=document.createElement("p")
        p_name.innerText=element.name;

        div.append(h4_brand,p_name)
        document.getElementById('productsinfo').append(div)

        let div_price=document.createElement('div')
        let price=document.createElement('h3')
        price.innerText="Rs."+element.price+element.currency+" 40%-OFF"+" "+element.price*1.4;
        div_price.append(price)
        document.getElementById("price_data").append(div_price)

        document.getElementById("siza_chart").innerHTML=`<div><h4><span>Siza chart</span><span>--------</span><span>siza chart ></span></h4></div><div style="display: flex; justify-content: space-around; border: 1px solid ;">
            <div><p>S</p></div>
            <div><p>M</p></div>
            <div><p>L</p></div>
            <div><p>XL</p></div>
        </div>`

        document.getElementById("button").innerHTML=`<div id="addtocart"><span><img src="" alt=""></span>Add to cart</div>
        <div id="wishlist"><span><img src="" alt="">wishlist</span></div>`

        document.getElementById("delivery-option").innerHTML=`<div><h4>DELIVERY OPTIONS </h4><span></span></div>
        <div>
            <form>
                <input type="text" placeholder="Enter pincode" id="pincode">
                <input type="submit"id="pincode-submit" value="check">
            </form>
        </div>
        <div><p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p></div>`;

        document.getElementById("extra_info").innerHTML=`<div>
        <div>100% Original Products</div>
        <div>Pay delivery might be available</div>
        <div>Easy 30 days returns and exchanges</div>
        <div>Try & Buy might be available</div>
    </div>`;

    document.getElementById("best-offers").innerHTML=`<div>BEST OFFERS <span></span></div>
    <div>
        <div><h4>Best price: </h4></div>
        <div id="coupon-discounts">
            <ul>
                <li>Coupon Discount: Rs. 50 off (check cart for final savings)</li>
                <li>Applicable on: Orders above Rs. 100 (only on first purchase)</li>
                <li>Coupon code: MYNTRA50</li>
            </ul>
        </div>
        <div id="banks-offers">
            <div id="icice-bank">
                <h4>10% Instant Discount on ICICI Bank Credit and Debit Cards</h4>
                <ul><li>Min spend Rs 3,500. TCA</li></ul>
            </div>
            <div id="icice-bank">
                <h4>0% Instant Discount on Axis Bank Credit Cards</h4>
                <ul><li>Min spend Rs 3,000. TCA</li></ul>
            </div>
            <div id="icice-bank">
                <h4>Flat Rs 150 Cashback on Paytm Wallet and Postpaid</h4>
                <ul><li>Min spend Rs 1,500. TCA</li></ul>
            </div>
            <div id="icice-bank">
                <h4>15% Cashback upto Rs 750 on ZestMoney.</h4>
                <ul><li>Shop with 0% Interest* EMIs. TCA</li></ul>
            </div>

            <div id="icice-bank">
                <h4>10% Instant Discount + 5% Unlimited Cashback</h4>
                <ul><li>Shop with Flipkart Axis Bank Credit Card; Min Spend Rs 3000</li></ul>
            </div>
            <div id="icice-bank">
                <h4>EMI option available</h4>
                <ul><li>EMI starting from Rs.15/month</li></ul>
            </div>

        </div>
    </div>`

    document.getElementById("proucts-details").innerHTML=`<div><h4>PRODUCT DETAILS </h4><span></span></div><div><P>${element.description}</P></div>`

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
display_products(data)
let cart =JSON.parse(localStorage.getItem('cart')) ||[]
function addtocartfun(element){
    // console.log(element)
    cart.push(element)
    let cart=localStorage.setItem("cart",JSON.stringify(cart))
    
}
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
        alert("pin is valid")
    }
    else{
        alert("pin not valid")
    }
}

