// Etch-a-sketch web app

const container = document.querySelector('.gridcontainer');
const inputBox = document.querySelector('#inputBox');
const buttonReset = document.querySelector('#reset');

let gridSide = parseInt(inputBox.value); 
let canvasSize = 480;
let isValid = true;

// Initiating grid from the start

function buildGrid (canvas, heightOfCanvas, numberRows) {
    let squareSide = heightOfCanvas/numberRows;
    for (let i=1; i<=numberRows**2; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', `float:left; background-color: black; opacity: 0; width: ${squareSide}px; height: ${squareSide}px;`);
        div.classList.add('gridSquare');
        canvas.appendChild(div);
    };
};

// Adding listeners

buildGrid(container, canvasSize, gridSide);

function makeListeners() {
    const listOfSquares = document.querySelectorAll('.gridSquare')

    listOfSquares.forEach((singleSquare) => {
        singleSquare.addEventListener('mouseenter', function (singleSquare) {
            singleSquare.target.style.opacity = parseFloat(singleSquare.target.style.opacity) +0.1 ;
        });
    });
}

makeListeners();


// Input by user: validating the number of grid rows and columns
// Should be an integer within 16-96 range

inputBox.addEventListener('input', function () {
    let numberTyped = parseInt(inputBox.value);
    if (!Number.isInteger(numberTyped) || numberTyped < 16 || numberTyped > 96) {
        inputBox.classList.add('input_invalid');
        isValid = false;
    }
    else {
        inputBox.classList.remove('input_invalid');
        isValid = true;
    };
});

// Finding 480 divisor with zero remainder

function findDivisor(canvasSideSize, divisor) {
    // divisor already validated
    while (canvasSideSize % divisor > 0) {
        divisor++;
    };
    return divisor
};

// Clearing canvas by completely removing divs

function clearCanvas(canvas) {
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    }
}

// On Reset btn click, read input value, clear canvas and build new grid with listeners

buttonReset.addEventListener('click', () => {
    if (isValid) {
        gridSide = inputBox.value;
        clearCanvas(container);
        gridSide = findDivisor(canvasSize, gridSide);
        inputBox.value = gridSide;
        buildGrid(container, canvasSize, gridSide);
        makeListeners();
    };
    
});