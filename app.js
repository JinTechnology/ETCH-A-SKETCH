const containerDiv = document.querySelector('#container');

//* RGB 
const rgbButton = document.querySelector('.randomRGB');
let isRGB = false;
//function for random rgb generator
function rgbGenerator(element) {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    if (isRGB) {
        element.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`
    } else {
        return;
    }
}
// clicking activate rainbow button should turn isRGB variable to true
rgbButton.addEventListener('click', () => {
    if (!isRGB) {
        isRGB = true;
    } else {
        isRGB = false;
    }
    console.log(isRGB);
})

//* choosing a grid size
function gridSizeSelector(input) {
    // clear the current board of all divs
    document.querySelectorAll('.squareDiv').forEach((e) => {
        e.remove();
    })
    let numberDivs = parseInt(input) * parseInt(input);
    for (let j = 0; j < numberDivs; j++) {
        const div = document.createElement('div');
        div.classList.add('squareDiv');
        containerDiv.appendChild(div);
        div.addEventListener('mouseover', () => {
            if (!isRGB) {
                div.classList.add('addColor')
            } else {
                rgbGenerator(div);

            }
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
clearGridBtn.addEventListener('click', removeBlack);

function removeBlack() {
    const allDivs = document.querySelectorAll('.squareDiv');
    allDivs.forEach((e) => {
        e.classList.remove('addColor');
    })
}