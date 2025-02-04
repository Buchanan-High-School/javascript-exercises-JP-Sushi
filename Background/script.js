const colors = ["red", "blue", "lightgreen", "aqua", "yellow", "forestgreen", "grey", "purple"]

const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]

//Get the DOM elements
const colorSpan = document.querySelector("#color");
const colorButton = document.querySelector("#get-color");
const randomButton = document.querySelector("#random-color");
const saveColor = document.querySelector("#save-color")

colorButton.addEventListener("click", function() {
    console.log("clicked!")
    //Get an element from the color array
    let pickedColor = getRandomNumber(colors)
    //Change the background
    document.body.style.backgroundColor = colors[pickedColor]
    //Update colorSpan
    colorSpan.innerText = colors[pickedColor]
})

randomButton.addEventListener("click", function() {
    console.log("clicked!")
    //Start a Hex string
    let pickedColor = "#";
    //Pick 6 random values from hex array
    //Loop over the array 6 times
    for(let el =0; el<6; el++) {
        pickedColor += hex[getRandomNumber(hex)];
        console.log(pickedColor)
    }
    //Set the background
    document.body.style.backgroundColor = pickedColor;
    //Update colorSpan
    colorSpan.innerText = pickedColor
})

function getRandomNumber(list) {
    console.log(list);
    return Math.floor(Math.random() * list.length);
}

saveColor.addEventListener("click", function() {
    console.log("clicked!")
    let apendchiled = saveColor.document
    console.log(apendchiled)
    parent.document.createElement(save-colors)
})