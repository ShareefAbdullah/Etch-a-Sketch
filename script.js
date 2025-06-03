//Get a reference to the container div in the html
const container = document.querySelector("#container");
// Create a new div and store it in the variable "pad"
const pad = document.createElement("div");
pad.classList.add("pad");
//Append the div to container
container.appendChild(pad);

function makeGrid() {
for(let i = 0; i < 16 * 16; i++){
 let cells = document.createElement("div");
  cells.classList.add("cells")
  //container.appendChild(cells);
  pad.appendChild(cells);
  cells.style.height = 700 / 16 + "px";
  cells.style.width = 700 / 16 + "px";
       
  cells.addEventListener("mouseover", () => {
  cells.style.backgroundColor = "black"
   
})
  }
  
}

makeGrid();