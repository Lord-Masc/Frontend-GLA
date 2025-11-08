// Day 3: DOM Manipulation — Creating, Removing, and Changing Elements

//----------How to change inner HTML (content)-----------------

// How to create and add new elements
// How to remove elements
// How to change element attributes
// Practice exercise

// How to create and add new elements
document.getElementById("demo").textContent = "<b>hii my name is computer</b>"
//-- adding a new child
const pera = document.createElement("p");
pera.textContent = "This is my text"
document.getElementById("pera").appendChild(pera);

// How to remove elements
document.getElementById("removeMe").remove();
//-- Remove element from perent node
const pere = document.getElementById("perent")
const child = document.getElementById("child")
pere.removeChild(child)

// How to change element attributes
const image= document.getElementById("myImg")
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s")
