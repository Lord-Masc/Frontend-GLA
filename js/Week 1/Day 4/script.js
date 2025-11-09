

// Clicking a button 🖱️
// Moving the mouse 🐭
// Typing in an input ⌨️
// Loading a page 🌐

const pera = document.createElement("p")
pera.textContent("this is my content")

document.getElementById("pera").addEventListener("mouseover",function(){
     console.log("Mouse is over the element!");
     document.getElementById("pera").appendChild(pera);
})


