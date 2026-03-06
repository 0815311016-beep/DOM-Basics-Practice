console.log("script started");

function changeColor() {
    console.log("click");

    let color = prompt("Enter a new color for the poem");
    let p = document.getElementById("poem");
    p.style.color = color;
}

function changeFontSize() {
    console.log("click");

    let changeFontSize = promt("New font size in pixels");
    let p = document.getElementById("poem");
    p.change.Font.Size = size;
}
