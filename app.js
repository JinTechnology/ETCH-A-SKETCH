const containerDiv = document.querySelector('#container');

function gridSizeSelector(input) {
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
gridSizeSelector(16);

//* Choosing a grid Size
const gridSize = document.querySelector('.gridSize');
gridSize.addEventListener('click', () => {
    let gridInput = "";
    let isGridInputValid = false;
    while (!isGridInputValid) {
        gridInput = parseInt(prompt('Choose number squares per side', 16));
        if (typeof(gridInput) === 'number' && gridInput >= 1 && gridInput < 101) {
            isGridInputValid = true;
        }
    }
    gridSizeSelector(gridInput);
})


//* Reset/Clearing current grid'
const clearGridBtn = document.querySelector('.clearGridBtn');
clearGridBtn.addEventListener('click', resetColor);

function resetColor() {
    const allDivs = document.querySelectorAll('.squareDiv');
    allDivs.forEach((e) => {
        e.classList.remove('addColor');
    })
}

//* randomize color generater
//? Requirements: 
//? There should be an optional button to click to activate random color generator 
//? random color generator should only work after clicking. Default is black
//? when rgb actived, change css to add rgb
const rgbButton = document.querySelector('.randomRGB');

//function for random rgb generator
function rgbGenerator() {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    return `rgb(${randomRed},${randomGreen},${randomBlue})`
}