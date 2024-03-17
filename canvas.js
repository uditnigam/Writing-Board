const canvas = document.querySelector("#canvas");
const headingBar = document.querySelector(".header-main");
const pencilButton = document.querySelector(".pencil-button");
const eraserButton = document.querySelector(".eraser-button");
const clearButton = document.querySelector(".clear-button");
let headingBarObj = headingBar.getBoundingClientRect();

const ctx = canvas.getContext("2d");
ctx.lineCap = "round";

//Variables
let painting = false;
let pencilColor = "black";
let activeTool = "pencil";

canvas.height = window.innerHeight - headingBarObj.height;
canvas.width = window.innerWidth;


//Resizing
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight - headingBarObj.height;
    canvas.width = window.innerWidth;
})

function startPosition(e) {
    let x = e.clientX;
    let y = e.clientY;
    y = getCoordinate(y);
    ctx.beginPath();
    ctx.moveTo(x, y);
    painting = true;
}

function finishedPosition() {
    painting = false;
}

function draw(e) {
    let x = e.clientX;
    let y = e.clientY;
    y = getCoordinate(y);
    if (painting == true) {
        if (activeTool == "pencil") {
            ctx.globalCompositeOperation = "source-over";
            ctx.lineWidth = 5;
            ctx.strokeStyle = pencilColor;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else if (activeTool == "eraser") {
            ctx.globalCompositeOperation = "destination-out";
            ctx.lineWidth = 15;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
};
//Event Listeners
function drawing(color) {
    painting = false;
    canvas.addEventListener("mousedown", startPosition);
}

canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);

function getCoordinate(initalY) {
    return initalY - headingBarObj.height;
};

//New page
clearButton.addEventListener("click", () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let imgBox = document.querySelectorAll(".image-box");
    if(imgBox){
        for (let i = 0; i < imgBox.length; i++)
        imgBox[i].remove();
    }
});


