noseX =0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    document.getElementById("square_sides").innerHTML = "Width and Height of a square would be "+ difference + "px";
    background('#F797C4')
    fill("#97A0F7");
    stroke("#97A0F7");
    text('Hello how are you.', noseX, noseY );
    textSize(difference);
}

function modelloaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX, "noseY =" + noseY);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(RightWristX - LeftWristX);
        console.log("LeftWristX ="+ LeftWristX, "RightWristX = "+ RightWristX, "difference ="+ difference);
    }
}