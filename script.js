//Get a reference to the container div in the html
const container = document.querySelector("#container");
// Create a new div and store it in the variable "pad"
const pad = document.createElement("div");
pad.classList.add("pad");
//Append the div to container
container.appendChild(pad);
//Add buttons
const newSketch = document.querySelector("#newSketch");
const black = document.querySelector("#black");
const grey = document.querySelector("#grey");
const random = document.querySelector("#random");
const erase = document.querySelector("#erase");

function firstGrid() {
for(let i = 0; i < 16 * 16; i++){
  let cells = document.createElement("div");
  cells.classList.add("cells");
  //container.appendChild(cells);
  pad.appendChild(cells);
  cells.style.height = 700 / 16 + "px";
  cells.style.width = 700 / 16 + "px";

  black.addEventListener("click", () => {
    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = "black";
      cells.style.opacity = 1;
    });
  });
  grey.addEventListener("click", () => {
    let currentOpacity = 0.1;
    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = "grey";
      cells.style.opacity = currentOpacity;
      if(currentOpacity < 1){
      currentOpacity += 0.1;
      }
    }); 
  });
  random.addEventListener("click", () => {
    const randomColor = getRandomColor();
    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = randomColor;
      cells.style.opacity = 1;
    });
  });
  erase.addEventListener("click", () => {
    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = "beige";
      cells.style.opacity = 1;
    });
  });
 }
}

function newGrid() {
  let userInput = prompt("Please provide a number between 1 and 100");
  if(isNaN(userInput)){
    alert("Please provide a number");
  }
  else if(userInput < 1 || userInput > 100){
    alert("The number is not correct");
  }
  else{
    for(let i = 0; i < userInput * userInput; i++){
    let cells = document.createElement("div");
    cells.classList.add("cells");
    //container.appendChild(cells);
    pad.appendChild(cells);
    cells.style.height = 700 / userInput + "px";
    cells.style.width = 700 / userInput + "px";

    black.addEventListener("click", () => {
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = "black";
        cells.style.opacity = 1;
      });
    });
    grey.addEventListener("click", () => {
      let currentOpacity = 0.1;
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = "grey";
        cells.style.opacity = currentOpacity;
        if(currentOpacity < 1){
          currentOpacity += 0.1;
        }   
      }); 
    });
    random.addEventListener("click", () => {
      const randomColor = getRandomColor();
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = randomColor;
        cells.style.opacity = 1;
      });
    });
    erase.addEventListener("click", () => {
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = "beige";
        cells.style.opacity = 1;
      });
    });
  }
 }
}

function deleteGrid() {
  pad.innerHTML = "";
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

firstGrid();

newSketch.addEventListener("click", () => {
  deleteGrid();
  newGrid();
});