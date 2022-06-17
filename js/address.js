import head from "../components/navbar.js"
document.querySelector('#navbar').innerHTML=head();




var dataarray=JSON.parse(localStorage.getItem("localdata"))||[];

document.getElementById("addbutton").addEventListener("click",function(){
    saveaddressinstorage()
}
    );
 
function saveaddressinstorage(){
    var objdata={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        pin:document.getElementById("pin").value,
        house:document.getElementById("house").value,
        local:document.getElementById("local").value,
        incity:document.getElementById("incity").value,
        insatte:document.getElementById("instate").value,
    }
    console.log(objdata) 

    dataarray.push(objdata);
    
    localStorage.setItem("localdata",JSON.stringify(dataarray));
}