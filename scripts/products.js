

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

        // title;
        let div=document.createElement('div')
        let h4_brand=document.createElement("h4")
        h4_brand.innerText=element.brand;
        console.log(h4_brand)

        let p_name=document.createElement("p")
        p_name.innerText=element.name;
        console.log(p_name)
        let p_description=document.createElement("p")
        p_description.innerText=element.description;
        // console.log(p_description)

        //price 
        let div_price=document.createElement('div')
        let price=document.createElement('h3')
        price.innerText="Rs. "+element.price+element.currency+" 40%-OFF"+" "+element.price*1.4;
        console.log(price)

        // innclusive tax 
        let tax=`<div><i><p>Inclusive of all taxes</p></i></div>`

        ///siza
        let siza=` <div>
            <div style="display: flex; justify-content: space-around; border: 1px solid ;">
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
            </div>
        </div>`
        console.log(siza)
        

    });
}
display_products(data)

// for image spliting the in array fromated

// console.log(data)
// let img=data[0].images.split("~")
// console.log(img[0])
// let i=document.createElement("img")
// i.src=img[0]
// document.getElementById('image-products').append(i)