song1 = "" ;
song2 = "" ;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function draw()
{
    image(video,0,0,600,500)
}

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function play()
{
    song.play();
}

function setup() 
{
	canvas = createCanvas(600, 500);
	canvas.center();
    canvas.position(400, 140)

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	leftWristX =  results[0].pose.leftWrist.x;
	LeftWristY =  results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX + " LeftWristY = " + LeftWristY);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
  }
}
