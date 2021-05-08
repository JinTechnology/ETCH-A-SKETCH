const containerDiv = document.querySelector('#container');

//* Creating the grid of divs and adding class color
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('squareDiv');
    // div.style.backgroundColor = '#4082fc'; //test color
    // div.innerText = `${i}`;
    // console.log(div);
    containerDiv.appendChild(div);
    div.addEventListener('mouseover', (event) => {
        // console.log(event.target.style.backgroundColor);
        div.classList.add('addColor')
    })


}

//* Reset/Clearing current grid'
const clearGridBtn = document.querySelector('.clearGridBtn');
const allDivs = document.querySelectorAll('.squareDiv');
clearGridBtn.addEventListener('click', (e) => {
    allDivs.forEach((e) => {
        e.classList.remove('addColor');
    })
})