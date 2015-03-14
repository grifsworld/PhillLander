 
 ///Initiating Canvas

//Debug Bool
var debug = true;

//Initializing Variables
//Player Stats
var health = 100;
var energy = 100;
var shield = 100;
//Level Demensions- Not the same as canvas
var roomX = 1150;
var roomY = 750;
//Velocity direction values
var xvel = 0;
var yvel = 0;
//Acceleration
var globalVel = .01;
//Maximum speed the lander can travel;
var maxVel = 3;

//For keypress Detection and storage
var key = [];

//Bool for mode
var opened = false;


//Player Object
var player = {img:null, x: canvas.width/2, y: canvas.height/2, 
width: 100, height:100, sprite: "Lander_Alpha_001/Phil (Default).png"};
player.img = new Image();
player.img.src = player.sprite;

//Meteor object
function meteor(x,y, width, height, sprite){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.sprite = sprite;
this.img = new Image();
this.img.src = sprite;
}

//Meteor Array
var rocks = new Array();

//Image Variables
var playerImg = new Image();
playerImg.src = "Lander_Alpha_001/Phil (Default).png";

function collide(){
//this collison resolve sucks, and needs to be fixed,
//but it will work for my testing purposes.

		yvel = -(yvel/1.25);
		xvel = -(xvel/1.25);
	
	console.log("collision!");
}

function statBars(){
	//red to draw health
	ctx.fillStyle = "red";
	ctx.fillRect((canvas.width/2)-(energy*6)/2,canvas.height-10,energy*6, 10);
	ctx.fillStyle = "blue";
	ctx.fillRect((canvas.width/2)-(shield*6)/2,canvas.height-20,shield*6, 10);
	ctx.fillStyle = "green";
	ctx.fillRect((canvas.width/2)-(health*6)/2,canvas.height-30,health*6, 10);
	//back to black
	ctx.fillStyle = "black";
	
}

//Update Function
function update(){

		for(var i = 0; i < rocks.length; i++){
			var obj = rocks[i];
			obj.x -= xvel;
			obj.y -= yvel;
			if(AABB(obj.x,player.x,obj.y,player.y,obj.width,player.width,obj.height,player.height) == true){
			collide();
			break;
		}
  	}
}



function dirVelocity(dir, speed){
	if(dir == "left"){
		xvel -= speed;
	}
	if(dir == "right"){
		xvel += speed;
	}
	if(dir == "up"){
		yvel -= speed;
	}
	if(dir == "down"){
		yvel += speed;
	}
}

function modeSwitch(){
	opened = !opened;
	if(opened){
		player.img.src = "Lander_Alpha_001/Phil (Open).png";
	}
	if(!opened){
		player.img.src = "Lander_Alpha_001/Phil (Default).png";
	}
	if(debug){
		console.log("Opened set to " + opened);
	}
	
}

function AABB(x1, x2, y1, y2, width1, width2, height1, height2){
	if(x1 < x2 + width2 &&
	   x1 + width1 > x2 &&
	   y1 < y2 + height2 &&
	   height1 + y1 > y2){
	   return true;
	}
	
}

function makeBoundary(){
	//top
	for(var i = 1; i < roomX/50; i++){
		rocks.push(new meteor(i*50,0, 50,50, "Lander_Alpha_001/Meteor.png"));
	}
	//bottom
	for(var i = 1; i < roomX/50; i++){
		rocks.push(new meteor(i*50,roomY, 50,50, "Lander_Alpha_001/Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++){
		rocks.push(new meteor(0,i*50,50,50,"Lander_Alpha_001/Meteor.png"));
		
	}
	//right
	for(var i = 0; i < (roomY+50)/50; i++){
		rocks.push(new meteor(roomX,i*50,50,50,"Lander_Alpha_001/Meteor.png"));
		
	}
	rocks.push(new meteor(200,200,100,100,"Lander_Alpha_001/Meteor.png"));
	
}
//Control setting
function controls(){
	//If you only want the function to happen once per keypress
	//Put it within the document.onkeydown functions
	//else, if you want something like continues movement
	//while a key is pressed, put it outside the functions.
	//check keyup
document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
};

//Key down Checking Function
document.onkeyup=function(e){
	code=window.event?e.keyCode:e.which;
	key[code] = 0;
	//Pause Game
	if(code == 27)
	{
		pauseGame();
	}
	//Mode Switch
	if(code == 90 && !paused){
		modeSwitch();
	}
		
};
//For movement
	//left
	if(key[37]){
		dirVelocity("left", globalVel);
	}
	//right
	if(key[39]){
		dirVelocity("right", globalVel);
	}
	//up
	if(key[38]){
		dirVelocity("up", globalVel);
	}
	//down
	if(key[40]){
		dirVelocity("down", globalVel);
	}
	

}

var rock = new meteor(10, 10, 10 ,10, "Meteor.png");
function draw(){
	//The order things are listed here is the order they're drawn,
	//first to last. We should probably put all images to be drawn
	//into an array for better management, and layer control
//Clear Rect is a better way of doing width=width, clears the screen
//for drawing fresh.
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.drawImage(player.img, player.x, player.y,player.width,player.height);
//ctx.drawImage()
for(var i = 0; i < rocks.length; i++){
var obj = rocks[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
statBars();
}
//this draws a meteor
//ctx.drawImage(rock.img,10,10,100,100);}


//Launched on load
function game()
{
setInterval(function(){
	if(paused == false)
	{
		controls();
update();
draw();
	}

},5);
}