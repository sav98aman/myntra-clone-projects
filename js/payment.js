import head from "../components/navbar.js"
document.querySelector('#navbar').innerHTML=head();


document.querySelector('#showmore').addEventListener("click",showmore);

function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "block";
    }
}


document.getElementById("Final-order").addEventListener("click",function(){
     let codes=document.getElementById("code").value;
    if(codes==="W68HP"){
        alert("Payment Successful");
        window.location.href="";
    }else{
        alert("Enter Correct Captcha")
    }
})