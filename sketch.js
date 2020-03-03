let slider1;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider1 = createSlider(0, 255);
}

function draw() {
    background(255, 255, slider1.value());
    
}
