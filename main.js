function preload(){

}

function setup(){
canvas=createCanvas(700,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,300,100,300,400);
    circle(300,100,100);
    circle(600,100,100);
    circle(600,500,100);
    circle(300,500,100);
    stroke(280,0,100);
    fill(280,0,100);
    
    rect(350, 75, 200, 55);
    rect(350, 475, 200, 55);
    rect(275, 150, 55, 300);
    rect(575, 150, 55, 300);
    fill(0,0,280);
}

function snapshot(){
save('image.png');
}