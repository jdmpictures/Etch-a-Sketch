
const gridButton = document.getElementById("grid-button");
const colorButton = document.getElementById("color-button");
let paintColor = 'black'

let rainbow = ''





gridButton.addEventListener('click', createGrid)

// function to set the size of the grid 
function createGrid () {
    grid.innerHTML = " ";
    let gridValue = document.getElementById("grid-slider").value;
    let gridVal = parseInt(gridValue);    
    grid.style.gridTemplateColumns = `repeat(${Math.round(gridVal /2.5)}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${Math.round(gridVal / 4.5)}, 1fr)`;
    for(i = 0; i < gridVal * gridVal; i++){
        let newDiv = document.createElement("div");
        newDiv.addEventListener('mouseover', paint)
        newDiv.style.backgroundColor = 'white';

        grid.appendChild(newDiv).className = "gird-item"
    }


}

colorButton.addEventListener('click',  ()=>{
    colorSelector();
})
//function to set the colour of the paint brush 

function colorSelector () {
    let colorValue = document.getElementById('color-slider').value;
    if(colorValue == 2){
        paintColor = 'red';
    } else if (colorValue == 3) {
        paintColor = 'blue';
    } else if (colorValue == 4) {
        rainbow = 'active';
                    while(rainbow == 'active'){
            paintColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }


    }
}

function rainbowColor (){

}
 

function paint () {
    this.style.backgroundColor = paintColor;
}

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
