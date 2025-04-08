var colourPicker;
let strokeWeightSlider;
var bgColourPicker;
var brushTypeMenu
var canvasWidthInput, canvasHeightInput;

function setup(){
    createCanvas(720,300);

    colourPicker = createColorPicker('deeppink');
    colourPicker.position(10,10);

    strokeWeightSlider = createSlider(1,10,5,1);
    strokeWeightSlider.position(10,40);

    bgColourPicker = createColorPicker('black');
    bgColourPicker.position(10,70);
    bgColourPicker.changed(repaint);

    brushTypeMenu = createSelect();
    brushTypeMenu.position(10,100);
    brushTypeMenu.option('Line');
    brushTypeMenu.option('Circle');
    brushTypeMenu.option('Square');

    var bgColourButton = createButton('Refresh');
    bgColourButton.position(10,130);
    bgColourButton.mousePressed(repaint);

    canvasWidthInput = createInput('720');
    canvasWidthInput.position(10, 160);
    canvasWidthInput.size(50);

    canvasHeightInput = createInput('300');
    canvasHeightInput.position(70, 160);
    canvasHeightInput.size(50);

    let resizeButton = createButton('Resize Canvas');
    resizeButton.position(10, 190);
    resizeButton.mousePressed(resizeCanvasFunction);

    background(bgColourPicker.value());
}

function draw(){
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());

    if(mouseIsPressed){
       let brushType = brushTypeMenu.value();

       if (brushType === 'Line') {
            line(mouseX, mouseY, pmouseX, pmouseY);
       } else if (brushType === 'Circle'){
            ellipse(mouseX, mouseY, strokeWeightSlider.value() * 2);
       } else if (brushType === 'Square'){
        rect(mouseX, mouseY, strokeWeightSlider.value() * 2, strokeWeightSlider.value() * 2);
       }
    }
}

function repaint(){
    background( bgColourPicker.value() );
}

function resizeCanvasFunction(){
    let newWidth = int(canvasWidthInput.value());
    let newHeight = int(canvasHeightInput.value());
    if (newWidth > 0 && newHeight > 0){
        resizeCanvas(newWidth, newHeight);
        repaint();
    }
}

function keyPressed(){
    if (key === 'c' || key === 'C') {
        repaint();
    }
}