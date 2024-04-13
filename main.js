function preload() {

}

function setup() {
canvas=createCanvas(1000,700);
canvas.position(500,200);

video=createCapture(VIDEO);
video.size(400,100);
video.hide();

}

function draw() {
    
 rect(900,100, 20, 500 );
rect(100,900,20,500)
image(video, 0,0,800,700);

}

function take_snapshot() {
save('filer_picture.png');
}

//image(video, 0,0,1000,700);