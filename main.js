nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 500);
    canvas.position(560, 130);

    nobody = ml5.poseNet(video, modelLoaded);
    nobody.on('pose', gotPoses)
}

function draw() {
    background('#939596');
    fill("#F90093");
    stroke("#F90093");
    square(nosex, nosey, difference);
}

function modelLoaded() {
    console.log("poseNet is initialised");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex + " nosey = " + nosey);

        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("rightwrist x=" + rightwristx + " leftwrist x=" + leftwristx);
    }
}