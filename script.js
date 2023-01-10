
const gridButton = document.getElementById("grid-button");
const grid = document.getElementById("grid");


// function to set the size of the grid 
gridButton.addEventListener('click', () => {
    let gridValue = document.getElementById("grid-slider").value;
    let gridVal = parseInt(gridValue);
    grid.innerHTML = " ";
    grid.style.gridTemplateColumns = `repeat(${gridVal}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridVal}, 1fr)`;
    for(i = 0; i < gridVal * gridVal; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "black";
        grid.appendChild(newDiv).className = "gird-item"
    }
});

let gridDiv = document.getElementsByClassName("gird-item");

gridDiv.addEventListener("mouseover", () => {

});