hedwigtheme = "";
peterpantheme = "";
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = "";
scoreRightWrist = "";

function preload(){
    hedwigtheme = loadSound("hedwigtheme.mp3");
    peterpantheme = loadSound("peterpantheme.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
    playing = document.getElementById("playing");

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        song = peterpantheme;
        playing.innerHTML = "Playing: Peter Pan Theme";
        play();
    }

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song = hedwigtheme;
        playing.innerHTML = "Playing: Hedwig's Theme Remix";
        play();
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

        // save the left wrist coordinates in variables
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        // save the right wrist coordinates in variables
        rightWristX = results[0].pose.right
    }
}