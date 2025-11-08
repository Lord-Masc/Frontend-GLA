// Get Element by id
const heading = document.getElementById("title");
console.log(heading);
console.log(heading.textContent);

//---->>>> changing
heading.textContent = "hii this is yash verma"
heading.style.color = "green"


//get Element by className
let desc = document.getElementsByClassName("desc");
console.log(desc);
console.log(desc[0].textContent);
console.log(desc[1].textContent);
 
for(let i = 0;i<desc.length;i++){
    desc[i].style.color = "blue"
    desc[i].style.fontSize ="20px"
}



