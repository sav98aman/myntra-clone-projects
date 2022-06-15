products()

async function products(){
    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products
    console.log(data2)
    appendData(data2)
}

function appendData(data){
    let product = document.getElementById("products")
    product.innerHTML=null
    data.forEach(ele => {
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.setAttribute("class", "pro-img")
        img.src=ele.Image

        let star = document.createElement("img")
        star.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHBQ-Ptz3JcgdGxGm_S05egkrGs3XTp_Aaw&usqp=CAU`

        let rating = document.createElement("div")
        rating.setAttribute("class", "rating")
        rating.innerHTML=ele.rating

        rating.append(star)
        star.style=("height:100%; background-color:pink")

        let name = document.createElement("h4")
        name.innerText=ele.Name
        name.setAttribute("class","name")

        let desc = document.createElement("p")
        desc.innerText=ele.Discripation
        desc.setAttribute("class","desc")

        let price = document.createElement("p")
        price.innerText=`Rs.${ele.Price}`
        price.setAttribute("class","price")



        card.append(img,rating,name,desc,price)
        product.append(card)

    });
}


async function sortFunc(){
    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products
    
    let sort = document.querySelector("#sort1").value
    
    if (sort=="dec"){
        
        data2.sort(function(a,b){
            
            return b.Price-a.Price
            
        })
        
        appendData(data2)
    }
    if(sort==="asc"){
        data2.sort(function (a,b){
             return a.Price-b.Price
        })
        appendData(data2)
    }
    
    if (sort==="pop"){
        data2.sort(function(a,b){
            return b.rating-a.rating
        })
        appendData(data2)
    }
    
}