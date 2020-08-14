// Etch-a-sketch web app

const container = document.querySelector('.gridcontainer');
const inputBox = document.querySelector('#inputBox');
const buttonReset = document.querySelector('#reset');

let gridSide = parseInt(inputBox.value); 
let canvasSize = 480;

// Initiating grid

buildGrid(container, canvasSize, gridSide);

// Validating the input value

inputBox.addEventListener('input', function () {
    let numberTyped = parseInt(inputBox.value);
    if (!Number.isInteger(numberTyped) || numberTyped < 16 || numberTyped > 96) {
        inputBox.style.background = 'red';
    };
});

function validateGridSide(inputSize, canvasSizes) {

    while (canvasSizes % inputSize > 0) {

        inputSize++;
    };


}

function buildGrid (canvas, heightOfCanvas, numberRows) {
    let squareSide = heightOfCanvas/numberRows;
    for (let i=1; i<=numberRows**2; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', `float:left; background-color: black; opacity: 0; width: ${squareSide}px; height: ${squareSide}px;`);
        div.classList.add('gridSquare');
        canvas.appendChild(div);
    }
}



function makeListeners() {
    const listOfSquares = document.querySelectorAll('.gridSquare')

    listOfSquares.forEach((singleSquare) => {
        singleSquare.addEventListener('mouseenter', function (singleSquare) {
            singleSquare.target.style.opacity = parseFloat(singleSquare.target.style.opacity) +0.1 ;
        });
    });
}

makeListeners();

function clearCanvas(canvas) {
    let listOfChildren = canvas.childNodes;
    listOfSquares.forEach((child) => {
        canvas.removeChild(child);

    });
}