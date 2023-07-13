function setup(){
    canvas = createCanvas(640,420);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(640,420);

    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    img(video,0,0,640,420);
}