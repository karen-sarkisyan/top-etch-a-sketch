const container = document.querySelector('.gridcontainer')

let gridSide = 16;
let canvasSize = 480;

console.log(canvasSize % gridSide)

const buttonReset = document.querySelector('#reset');
let inputValue = document.querySelector('#inputBox')
buttonReset.addEventListener('click', () => console.log(inputValue.value));

/*
while (canvasSize % gridSide > 0) {
    console.log('oops!');

    gridSide++;
};

*/

for (let i=1; i<=gridSide**2; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'float:left; background-color: black; opacity: 0; width: 30px; height: 30px;');
    div.classList.add('gridSquare');
    container.appendChild(div);
}

const listOfSquares = document.querySelectorAll('.gridSquare')

listOfSquares.forEach((singleSquare) => {
    singleSquare.addEventListener('mouseenter', function (singleSquare) {
        singleSquare.target.style.opacity = parseFloat(singleSquare.target.style.opacity) +0.1 ;
    });
});