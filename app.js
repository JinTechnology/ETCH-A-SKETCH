const containerDiv = document.querySelector('#container');

//* Creating the grid of divs and adding class color (starting point)
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('squareDiv');
        containerDiv.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('addColor')
        })
    }
    containerDiv.style.setProperty('grid-template-columns', `repeat(16,1fr)`);
}
defaultGrid();

//* Choosing a grid Size
//? grid size will change 
//? 1) number of boxes 
//? 2) number of columns 
//? 3) size of the boxes
const gridSize = document.querySelector('.gridSize');
let gridInput = "";
gridSize.addEventListener('click', () => {
    //! check to see if gridInput is a number, and is between 0 and 100

    gridInput = parseInt(prompt('Choose number squares per side', 16));


    gridSizeChange(gridInput);
})

function gridSizeChange(input) {
    //? clear the current board of all divs
    document.querySelectorAll('.squareDiv').forEach((e) => {
        e.remove();
    })
    let numberDivs = parseInt(input) * parseInt(input);
    for (let j = 0; j < numberDivs; j++) {
        const div = document.createElement('div');
        div.classList.add('squareDiv');
        containerDiv.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('addColor')
        })
        containerDiv.style.setProperty('grid-template-columns', `repeat(${input},1fr)`);

    }
}

//* Reset/Clearing current grid'
const clearGridBtn = document.querySelector('.clearGridBtn');
clearGridBtn.addEventListener('click', resetColor);

function resetColor() {
    const allDivs = document.querySelectorAll('.squareDiv');
    allDivs.forEach((e) => {
        e.classList.remove('addColor');
    })
}