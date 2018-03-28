let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

// Screen width/height reference
let screen = {width: canvas.clientWidth, height: canvas.clientHeight};

// Event Handling
canvas.addEventListener("keydown", processInput, false);

// Function for requesting next frame
let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000/60); };

let imgDrum;
let alienAnim;

function init() {
    imgDrum = new StaticSprite(images[0], 10, 300, 100, 100);
    alienAnim = new AnimatedSprite(images[1], 4, 0.3, screen.width/2- 50, screen.height/2 - 50, 100, 100);

    requestAnimationFrame(update);
}

function update() {
    // Game Logic

    // Render call
    render();

    requestAnimationFrame(update);
}

function render() {
    context.clearRect(0, 0, screen.width, screen.height);
    alienAnim.Draw(context);
    imgDrum.Draw(context);
}

function processInput(e) {
    switch (e.keyCode) {
        case 80: { // P Button for "play"
            was.play();
            break;
        }
        case 76: { // L for "loop"
            was2.play();
            break;
        }
        case 83: { // S for "stop"
            was.stop();
            was2.stop();
            break;
        }
    }
}