//How to get user input from forms

const btn = document.querySelector("#btn")
btn.addEventListener("click",function(){
    const tost = document.getElementById("text").value
    alert("hii "+tost+" ! ")
})