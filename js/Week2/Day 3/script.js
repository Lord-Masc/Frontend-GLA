// An "event" is something that happens on a webpage.

// Examples:

//      Click
//      Key press
//      Mouse move
//      Scroll
//      Input


// const input = document.getElementById("nameInput");
// const display = document.getElementById("display");

// input.addEventListener("keyup", () => {
//   display.textContent = input.value;
// });

// input.addEventListener("input", () => {
//   console.log(input.value);
// });

const element = document.getElementById("hoverText");

element.addEventListener("mouseover", () => {
  element.style.color = "red";
});

element.addEventListener("mouseout", () => {
  element.style.color = "blue";
});

