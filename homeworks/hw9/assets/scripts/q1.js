/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    var glizzy = document.getElementById("q1-container");
    glizzy.style.backgroundColor = color;

}

function redButtonClicked() {
    setBackgroundColor("#EF476F");

}
// This gets the element with id "q1-btn-red" and sets the browser to run the function redButtonClicked() when someone clicks the element
document.getElementById("q1-btn-red").onclick = redButtonClicked;



function yellowButtonClicked() {
    setBackgroundColor("#FFD166");
}
document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;


function greenButtonClicked() {
    setBackgroundColor("#06D6A0");
}

document.getElementById("q1-btn-green").onclick = greenButtonClicked;

function lightBlueButtonClicked() {
    setBackgroundColor("#118AB2");
}

document.getElementById("q1-btn-lightblue").onclick = lightBlueButtonClicked;

function blueButtonClicked() {
    setBackgroundColor("#073B4C");
}

document.getElementById("q1-btn-blue").onclick = blueButtonClicked;


//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly





// For the light blue button
// Use the color #118AB2, or change it up to your liking

// TODO: Make the light blue button work similarly





// For the blue button
// Use the color #073B4C, or change it up to your liking

// TODO: Make the blue button work similarly
