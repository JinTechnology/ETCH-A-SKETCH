//? create a 16 x 16 grid of square divs
//?     FOR loop to generate 256 divs 
//?     create element div 
//?     append to container parent div node
//? Add CSS to each div to be uniform width and length     
//?     try float/clear
//?     try inline-block
//?     try flexbox
//?     try css-grid
//?         ** borders and margins can adjust the size of the squares **
//? Add hover effect 
//?     when mouse enters the div space, change the color 
//?
//? Add button to the top of the window for reset and clearing the current grid

const containerDiv = document.querySelector('#container');



for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('squareDiv');
    // div.style.backgroundColor = '#4082fc'; //test color
    // div.innerText = `${i}`;
    console.log(div);
    containerDiv.appendChild(div);
    div.addEventListener('mouseover', (event) => {
        console.log(event.target.style.backgroundColor);
        div.classList.add('addColor')
    })
}