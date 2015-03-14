var key = [];

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var player = {img:null, x: canvas.width/2, y: canvas.height/2, width: 50, height:50, sprite: "http://etc.usf.edu/clipart/40600/40690/pb_sq_40690_lg.gif"};
player.img = new Image();
player.img.src = player.sprite;

//Example of a function that will make a game object with sprite attached
function rock(x, y, width, height, sprite){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
	
}
//explosion object
function explosion(x,y,width, height, sprite){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
}
//http://i.imgur.com/FOZylZA.jpg

var rocks = new Array();

for(var i = 0; i < 20; i++){
	rocks[i] = new rock(Math.random()*canvas.width,Math.random()*canvas.height, 50, 50, "http://i.imgur.com/FOZylZA.jpg");
	
}

//object above constructed
var enemy = new rock(0,0,50,50,"http://i.imgur.com/zicDv11.png");
var boom = new explosion(10,10,100,100,"http://i.imgur.com/sTrzERo.png");
//collision detection logic
function checkCollide(obj1, obj2){
	if(obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.height + obj1.y > obj2.y){
	//collision!
	
	}
}

function background(x,y,width,height,sprite){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
}
var bgSize = 2000;

var bckgrnd = new background((canvas.width/2-bgSize/2),(canvas.height/2 -bgSize/2),bgSize,bgSize,"http://i.imgur.com/JbS1G4B.jpg");


//array for rendering layers
var images = [bckgrnd,boom,enemy];

for(rock in rocks){
	rock = rocks[rock];
	images.push(rock);
}

var camera = {x:0, y:0};

//container 
(function(){
player.sprite.onload=function()
{
    ctx.drawImage(player.sprite,player.x,player.y);
}

document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
}
document.onkeyup=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=0;
}
})();
var xvel = 0;
var yvel = 0;
var canx = 0;
var cany = 0;
//physics
setInterval(function()
{
	
    if(key[37]){
    	xvel = xvel-.01;
    }
    if(key[38]){
    	yvel = yvel -.01;
    }
    if(key[39]){
    	xvel = xvel +.01;
    }
    if(key[40]){
    	yvel = yvel +.01;
    }
    
    //checkCollide(player,enemy);
    canvas.width=canvas.width;
    /*for(var obj in rocks){
    	obj = rocks[obj];
    	obj.x = obj.x+2*(Math.random());
    	if(obj.x > canvas.width){
    		obj.x = 0;
    		obj.y = Math.random()*canvas.height;
    	}
    }*/
    //draws out the images stored in The Images array, deciding layer order.
    
    	
    ctx.translate(canx-=xvel,cany-=yvel);
    for(var obj in images){
    	obj = images[obj];
    	ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    	
    }
    
    
    ctx.drawImage(player.img, player.x,player.y, player.width, player.height);
    player.x += xvel;
    player.y += yvel;
    
    ctx.drawImage(boom.img, boom.x-=xvel, boom.y-=yvel, 50, 50);
    

},5);




