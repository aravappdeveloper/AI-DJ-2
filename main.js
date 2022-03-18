hedwigtheme = "";
peterpantheme = "";

function preload(){
    hedwigtheme = loadSound("hedwigtheme.mp3");
    peterpantheme = loadSound("peterpantheme.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}