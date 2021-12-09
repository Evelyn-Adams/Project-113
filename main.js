function preload(){

}

function setup(){
canvas=createCanvas(2000,1000);
canvas.position(100,0);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,640,480,300,400);
    circle(550,400,100);
    circle(550,975,100);
    circle(1010,400,100);
    circle(1010,975,100);
    stroke(280,0,100);
    fill(280,0,100);
    
    rect(600, 375, 360, 55);
    rect(600, 950, 360, 55);
    rect(520, 445, 55, 485);
    rect(982, 445, 55, 485);
    fill(0,0,280);
}

function take_snapshot(){
save("image.png");
}