
const gridButton = document.getElementById("grid-button");
const colorButton = document.getElementById("color-button");
const closeButton = document.getElementById("close-button")
const title = document.getElementById('titles')
let colorValue = document.getElementById('color-slider').value;
let modal = document.getElementsByClassName('modal');
let rainbow = '';
let paintColor = 'black';



gridButton.addEventListener('click', createGrid)

// function to set the size of the grid 

function createGrid () {
    grid.innerHTML = " ";
    let gridValue = document.getElementById("grid-slider").value;
    let gridVal = parseInt(gridValue);    
    grid.style.gridTemplateColumns = `repeat(${Math.round(gridVal / 2)}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${Math.round(gridVal / 4 )}, 1fr)`;
    for(i = 0; i < gridVal * gridVal; i++){
        let newDiv = document.createElement("div");
        newDiv.addEventListener('mouseover', paint)
        newDiv.style.backgroundColor = 'white';
        grid.appendChild(newDiv).className = "gird-item"
    }

}

colorButton.addEventListener('click', colorSelector);


//function to set the colour of the paint brush 

function colorSelector () {
    let color = document.getElementById('color-slider').value;
    if (color == 1){
        paintColor = 'black'
        rainbow = ''
    } else if(color == 2){
        rainbow = '';
        paintColor = 'red';
    } else if (color == 3) {
        paintColor = 'blue';
        rainbow = '';
    } else if (color == 4) {
        rainbow = 'active';
    }
}

//Function that activates 
function paint () {
    if (rainbow == 'active'){
            paintColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase().toString();
    }
    this.style.backgroundColor = paintColor;
}


//Modal open and close functions 

function helpBox() {
   document.getElementById('modal').className = 'active' + ' ' + 'modal';
   document.getElementById('overlay').className = 'active';
   
}

window.onload = function() {
    helpBox();
}

title.addEventListener('click', () => {
    helpBox();

});

closeButton.addEventListener('click', () => {
    document.getElementById('modal').className = 'modal';
    document.getElementById('overlay').className = '';

});
