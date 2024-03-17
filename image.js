const main = document.querySelector(".main");
const uploadBtn = document.querySelector(".upload-button");
const imageInput = document.querySelector(".image-input");
let isDraggable;

uploadBtn.addEventListener("click", function () {
    imageInput.click();
})

imageInput.addEventListener("change", function (e) {
    const display = createImageBox();
    const img = document.createElement("img");
    const src = URL.createObjectURL(e.target.files[0]);
    img.src = src;
    display.appendChild(img);
})

function createImageBox() {
    const imageBox = document.createElement("div");
    imageBox.setAttribute("class", "image-box");
    imageBox.innerHTML = `
    <div class="img-area">
        <div class="image-container" width="50px" height="50px"></div>
        <div class="delete-image">
            <i class="bi bi-x-lg"></i>
        </div>
    </div>        
    `;
    main.appendChild(imageBox);
    // delete the image
    const deleteImage = imageBox.querySelector(".delete-image");
    deleteImage.addEventListener("click", function () {
        imageBox.remove();
    })
    //Add the image container to the canvas
    let imgContainer = imageBox.querySelector(".image-container");

    imageBox.addEventListener("click", function(e){
        e.preventDefault();
        console.log("hello")
        drag(imageBox);
    })
    return imgContainer;
}

function drag(imageBox){
    let canvasContainer = document.querySelector('.main')
    ctx.strokeStyle = "rgba(0,0,0,0)";
    let difference = [0, 0];
    let isDown = false;
    imageBox.addEventListener('mousedown', function (e) {
        e.preventDefault();
        isDown = true;
        console.log("isDown: ", isDown)
        difference = [
            imageBox.offsetLeft - e.clientX,
            imageBox.offsetTop - e.clientY
        ];
    },true);
    
    canvasContainer.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (isDown) {
            console.log("isDown: ", isDown)
            imageBox.style.left = (e.clientX + difference[0]) + 'px';
            imageBox.style.top = (e.clientY +  difference[1]) + 'px';
        }
    },true);
    
    canvasContainer.addEventListener('mouseup', function (e) {
        e.preventDefault();
        isDown = false;
        console.log("isDown: ", isDown)
    },true);
}