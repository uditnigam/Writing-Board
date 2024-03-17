drawing("black");

let color = document.querySelectorAll("#option");
// console.log(color)
for(let i=0; i < color.length; i++){
    color[i].addEventListener("click", ()=>{
        color.forEach((col) =>{
            col.classList.remove("active-color");
        })
        color[i].classList.add("active-color");
        pencilColor = color[i].classList[1];
        // console.log("pencilColor", pencilColor)
        drawing(pencilColor);
    })
}

pencilButton.addEventListener("click", ()=>{
    let isActive = pencilButton.classList.contains("active-tool");
    if(!isActive){
        pencilButton.classList.add("active-tool");
        activeTool = "pencil";
    } else {
        pencilButton.classList.remove("active-tool");
    }
})
eraserButton.addEventListener("click", ()=>{
    let isActive = eraserButton.classList.contains("active-tool");
    if(!isActive){
        eraserButton.classList.add("active-tool");
        activeTool = "eraser";
    } else {
        eraserButton.classList.remove("active-tool");
        activeTool = "pencil";
    }
})