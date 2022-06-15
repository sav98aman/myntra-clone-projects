products()

async function products(){
    let url = `https://api.jsonbin.io/b/5efb732c7f16b71d48a8cd5d/1`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products
    console.log(data2)
    appendData(data2)
}

function appendData(data){
    let product = document.getElementById("products")
    data.forEach(ele => {
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.setAttribute("class", "pro-img")
        img.src=ele.search_image

        card.append(img)
        product.append(card)
    });
}