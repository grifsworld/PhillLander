 
//Debug Bool
var debug = true;

//Initializing Variables
//Player Stats
var health = 100;
var energy = 100;
var shield = 100;
//Level Demensions- Not the same as canvas
var roomX = 10000;
var roomY = 2000;
//Velocity direction values
var xvel = 0;
var yvel = 0;
//Acceleration
var globalVel = .015;
//Maximum speed the lander can travel;
var maxVel = 3;

//For keypress Detection and storage
var key = [];

//Bool for mode
var opened = false;
var score = 0;

platform = new Image();
platform.src = "images/Comet/Platform.png";


//Player Object
var player = {img:null, x: canvas.width/2, y: canvas.height/2, 
width: 100, height:100, transX: canvas.width/2, transY: canvas.height/2, sprite: "images/phil/Phil (Default).png"};
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

//Comet Object
function comet(x,y, width, height, sprite){
	this.x = x;
	this.y =y;
	this.height = height;
	this.width = width;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
}


//Level Box Array
var boundary = new Array();
//Obstacle array
var meteors = new Array();


//Image Variables
var playerImg = new Image();
playerImg.src = "images/phil/Phil (Default).png";

function initMeteors(level)
{
	var maxSize =  0;
	var numMeteors = Math.random() * (level * 50);
	var positionX = 0;
	var positionY = 0;
	for(var i = 0 ; i < numMeteors; i++)
	{
		maxSize = Math.random()  * 150 + 50;
		positionX = Math.random() * roomX + 1200;
		positionY = Math.random() * roomY;
		meteors.push(new meteor(positionX,positionY, maxSize,maxSize, "images/meteors/Meteor.png"));
	}
}


var controlFlip = false;
var modeLock = false;
var eventPopped = false;
var eventTriggered;	
function randEvent(){
	setInterval(function(){
		var random = Math.round(Math.random());
		if(random == 0){
			console.log("0");
			controlFlip = true;
			eventPopped = true;
			eventTriggered = "controlFlip";
			setTimeout(function(){
			controlFlip = false;
			}, 10000);
			
		}
		if(random == 1){
			console.log("1");
			modeLock = true;
			eventPopped = true;
			eventTriggered = "modeLocked";
			console.log(modeLock);
			setTimeout(function(){
				modeLock = false;
			}, 5000);
		}
	},30000);
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
function boundaryCollision(){
	//console.log(player.transX);
if(player.transX+player.width> roomX || player.transX-player.width/2 < 0){
	xvel = -xvel;
}
if(player.transY+player.height > roomY || player.transY-player.height/2 < 0){
	yvel = -yvel;
}

}

function removeElement(array, i){
	var index = array.indexOf(i);
	array.splice(index, 1);
	console.log("removed");
}

function obstacleCollision(image1, image2, arrayIndex){
	
    var mx1 = image1.x;
    var Mx1 = image1.x + image1.width;
    var my1 = image1.y;
    var My1 = image1.y + image1.height;
    var mx2 = image2.x;
    var Mx2 = image2.x + image2.width;
    var my2 = image2.y;
    var My2 = image2.y + image2.height;
	
	// 0 <= x < 1, 0 <= y < 1
    if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 10;
          else if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);

       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 10;
          else if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 10;
          else if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 10;
          else if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }  
    
    //0 <= x < 1, 1 <= y < 2    
    }else if(0 <= Math.abs(xvel) < 1 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       } 
    
    //1 <= x < 2, 0 <= y < 1   
    }else if(1 <= Math.abs(xvel) < 2 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    //1 <= x < 2, 1 <= y < 2
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 20;
          else if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    //0 <= x < 1, 2 <= y < 3
    }else if(0 <= Math.abs(xvel) < 1 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    //1 <= x < 2, 2 <= y < 3
    }else if(1 <= Math.abs(xvel) < 2 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    //2 <= x < 3, 2 <= y < 3
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    //2 <= x < 3, 1 <= y < 2
    }else if(2 <= Math.abs(xvel) < 3 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    //2 <= x < 3, 0 <= y < 1
    }else if(2 <= Math.abs(xvel) < 3 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 30;
          else if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    
    // x = 3 or y = 3
    }else if(Math.abs(xvel) == 3 || Math.abs(yvel) == 3){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
    	  if(opened == true) health -= 40;
          else if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 40;
          else if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if(opened == true) health -= 40;
          else if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if(opened == true) health -= 40;
          else if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = -1000;
          image1.y = -1000;
          removeElement(meteors, arrayIndex);
       }
    }
}

function circleSquareCollide(circle,rect){
	//console.log(circle.y);
	//console.log(rect.y);
	var radius = ((circle.width-200)/2);
    var distX = Math.abs(circle.x+radius - rect.x-rect.width/2);
    var distY = Math.abs(circle.y+radius+100 - rect.y-rect.height/2);

    if (distX > (rect.width/2 + radius)) { return false; }
    if (distY > (rect.height/2 + radius)) { return false; }

    if (distX <= (rect.width/2)) { return true; } 
    if (distY <= (rect.height/2)) { return true; }

    var dx=distX-rect.width/2;
    var dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(radius*radius));
}
var Xdis;
var Ydis;
var sqx;
var sqy;
var sqh;
var Hdis;
var speed;
var angle;
var cosp;
var sinp;
var Xspeed;
var Yspeed;

var disToXena;

var landerRotate = 0;
//Update Function
function update(){
	//updating score
	if(xvel > 0){
		score += xvel*0.01;
	}
	//console.log(yvel);
	//console.log(player.transX);
	healthCondition();
	//Updating virtual player location data
	player.transX += xvel;
	player.transY += yvel;
	
	//Moving Xena in relation to player
	xena.x -= xvel;
	xena.y -= yvel;
	
	//Updating the array that surrounds the level
		for(var i = 0; i < boundary.length; i++){
			var obj = boundary[i];
			obj.x -= xvel;
			obj.y -= yvel;
		}
	//updating the array for obstacle meteors
	for(var i = 0; i < meteors.length; i++){
		
			obj = meteors[i];
			Xdis = player.x - obj.x;
			Ydis = player.y - obj.y;
			sqx = Math.pow(Xdis, 2);
			sqy = Math.pow(Ydis, 2);
			sqh = sqx + sqy;
			Hdis = Math.sqrt(sqh);
			speed = 80/Hdis;
		    angle = Math.atan2(Ydis, Xdis);
			cosp = Math.cos(angle);
			//console.log(cosp);
			Xspeed = speed * cosp;
			sinp = Math.sin(angle);
			//console.log(sinp);
			Yspeed = speed * sinp;
			if(Hdis <= 600){
			    obj.x += Xspeed - xvel;
			    obj.y += Yspeed - yvel;
			}else{
				obj.x -= xvel;
				obj.y -= yvel;
			}
			obstacleCollision(obj,player, i);

		}
		boundaryCollision();
		modeUpdate();
		disToXena = -(player.transX + player.width - roomX + (roomY/2)+200);
		//console.log(disToXena);
		//if(circleSquareCollide(player,xena) == true){
		//	console.log("collide");
		//}
		//console.log(circleSquareCollide(xena, player));
		//Logic for comet collision
		//if player is within 400 pixles of xena
		
	 	
		if(disToXena < 400){

			landerRotate = (180-((disToXena * 180)/(400)));
			//console.log(landerRotate);
			if(landerRotate > 180){
				landerRotate = 180;
			}
		}
		ctx.fillRect(xena.x,xena.y+roomY/2-200,100,400);
		if(circleSquareCollide(xena, player) == true){
			xvel = -xvel;
			yvel = -yvel;
		}
		if(player.x < xena.x + 100 && 
		   player.x + player.width > xena.x &&
		   player.y < xena.y+roomY/2-200 + 400 &&
		   player.height + player.y > xena.y+roomY/2-200){
		   	score += 20;
		   	nextLevel();
		   }
}

function nextLevel()
{
	console.log("next Level is game paused: " );
	level += 1;
	roomX += level *50;
	player.transY = canvas.height/2;
	player.transX = canvas.width/2;
	
	xvel = 0;
	yvel = 0;
	health = 100;
	shield = 100;
	energy = 100;
	landerRotate = 0;
//	disToXena = roomX;
	boundary = [];
	meteors = [];
	xena = new comet(roomX-roomY/2,-100, roomY, roomY, "images/Comet/Comet.png");
	makeBoundary();
	initMeteors(level);
}

function modeUpdate(){
			
	if(opened){
		if(energy <= 100){			
		energy += .5;
		}
		if(energy >= 100){
			if(shield <= 100){
				shield += .05;
				
			}
		}
	}
	
}

function dirVelocity(dir, speed){
	if(dir == "left"){
		if(xvel > -maxVel){
		energy -= .1;
		xvel -= speed;	
		}
		
	}
	if(dir == "right"){
		if(xvel < maxVel){
			energy -= .1;
			xvel += speed;
		}
		
	}
	if(dir == "up"){
		if(yvel > -maxVel){
			energy -= .1;
		yvel -= speed;	
		}
		
	}
	if(dir == "down"){
		if(yvel < maxVel){
			energy -= .1;
			yvel += speed;
		}
		
	}
}

function modeSwitch(){
	
	opened = !opened;
	if(opened){
		player.img.src = "images/phil/Phil (Open).png";
		sound.play('charging');
		sound.volume(0.25);

	}
	if(!opened){
		player.img.src = "images/phil/Phil (Default).png";
		sound.stop('charging');
	}
	if(debug){
		console.log("Opened set to " + opened);
	}
	
}



function makeBoundary(){
	//top
	for(var i = 1; i < roomX/50; i++)
	{
		boundary.push(new meteor(i*50,0, 50,50, "images/meteors/Meteor.png"));

	}
	//bottom
	for(var i = 1; i < roomX/50; i++)
	{
		boundary.push(new meteor(i*50,roomY, 50,50, "images/meteors/Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++)
	{
		boundary.push(new meteor(0,i*50,50,50,"images/meteors/Meteor.png"));
		
	}
	
}

function healthCondition(){
	if( health <= 0){
	sound.play('explosion');
	alert(" You Died! \n Your Score: " + Math.floor(score) + "\n You made it to level: " + level);
    location.reload();
	}
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
	//Mode Switch
	if(code == 88)
	{
		nextLevel(level);
	}
	if(code == 27)
	{
		console.log("escape key pressed");
		if(paused == false)
		{
			paused = true;
		}
		else
		{
			paused = false;
		}
		
	}
	if(code == 90 && !paused){
		
		if(!modeLock){
		modeSwitch();
		}
	}
	
};
//For movement
	//left
	if(key[37]){
		if(energy > 0){
		if(controlFlip == true){
			dirVelocity("right", globalVel);
		}
		if(controlFlip == false){
			dirVelocity("left", globalVel);	
		}
		
		}
		
	}
	//right
	if(key[39]){
		if(energy > 0){
			if(controlFlip == true){
				dirVelocity("left", globalVel);
			}
			if(controlFlip == false){
				dirVelocity("right", globalVel);
			}
		
		}
	}
	//up
	if(key[38]){
		if(energy > 0){
			if(controlFlip == true){
				dirVelocity("down", globalVel);
			}
			if(controlFlip == false){
				dirVelocity("up", globalVel);
			}
		
		}
	}
	//down
	if(key[40]){
		if(energy > 0){
		if(controlFlip == true){
			dirVelocity("up", globalVel);
				
			}
			if(controlFlip == false){
				dirVelocity("down", globalVel);
			}
		
	}
	}
	
	
	if(key[90]){
		
	}
}

var alpha = 1;
var randAlert = new Image();
var wait = 1;

//use fade to make the swap and make the square fade in and out
function displayEvent(event){
	//flipped controls
	if(eventPopped == true){
			if(event == "controlFlip"){
				randAlert.src = "images/alerts/flippedAlert.jpg";

			ctx.globalAlpha = alpha;
			if(alpha >= 0){				
			ctx.drawImage(randAlert, canvas.width/2-150, canvas.height-100,300,75);
			if(wait > 0){
				wait -= 0.001;
			}
			if(wait <= 0){
				alpha -= .01;
			}
			
			}
			
			if(alpha < 0){
				
				eventPopped = false;
				alpha = 1;
				wait = 1;
			}
	
			ctx.globalAlpha = 1;
}

}
//Mode locked
	if(eventPopped == true){
			if(event == "modeLocked"){
				randAlert.src = "images/alerts/lockedAlert.jpg";

			ctx.globalAlpha = alpha;
			if(alpha >= 0){				
			ctx.drawImage(randAlert, canvas.width/2-150, canvas.height-100,300,75);
			if(wait > 0){
				wait -= 0.001;
			}
			if(wait <= 0){
				alpha -= .01;
			}
			
			}
			
			if(alpha < 0){
				
				eventPopped = false;
				alpha = 1;
				wait = 1;
			}
	
			ctx.globalAlpha = 1;
}

}

}


xena = new comet(roomX-roomY/2,-100, roomY, roomY, "images/Comet/Comet.png");

function draw(){
	//The order things are listed here is the order they're drawn,
	//first to last. We should probably put all images to be drawn
	//into an array for better management, and layer control
//Clear Rect is a better way of doing width=width, clears the screen
//for drawing fresh.
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillRect(0,0, canvas.width, canvas.height);
background.speedx = xvel;
background.speedy = yvel;
background.getDirection();
background.draw();
ctx.save();
ctx.translate((canvas.width/2)+(player.width/2), (canvas.height/2)+player.height/2);
ctx.rotate(-landerRotate*Math.PI/180);
//ctx.globalAlpha = 0.2;
ctx.drawImage(player.img, player.x-canvas.width/2-player.width/2, player.y-canvas.height/2-player.height/2,player.width,player.height);
ctx.restore();
if(eventPopped == true){
	displayEvent(eventTriggered);
}



for(var i = 0; i < meteors.length; i++){
var obj = meteors[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}

for(var i = 0; i < boundary.length; i++){
var obj = boundary[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}


//drawing the comet

ctx.drawImage(xena.img,xena.x,xena.y,xena.width,xena.height);
//ctx.fillStyle = "#00FF00";
ctx.drawImage(platform,xena.x,xena.y+roomY/2-200,100,400);

/*
ctx.beginPath();
ctx.arc(xena.x-roomY/2,xena.y+25,roomY/2,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "#FFFF99";
ctx.fill();*/



//HOW TO ROTATE STUFF
/*
ctx.save();
ctx.translate(canvas.width/2,canvas.height/2);
ctx.rotate(rotate*Math.PI/180);
for(var i = 0; i < boundary.length; i++){
var obj = boundary[i];
ctx.drawImage(obj.img,obj.x-canvas.width/2,obj.y-canvas.height/2,obj.width,obj.height);
}
ctx.restore();
if(rotate < 90){
	rotate+= .1;
}
*/
statBars();
ctx.font="20px Georgia";
ctx.fillStyle = "white";
ctx.fillText("Score: " + Math.floor(score), 100,100);
ctx.fillText("Level: " + level, 100,120);

//this draws a meteor
//ctx.drawImage(rock.img,10,10,100,100);
}


//Launched on load
function loadGamea(){
makeBoundary();
initMeteors();
randEvent();
setInterval(function(){
controls();
update();
draw();
},5);
}

function game(){

console.log("in game");

setInterval(function(){

if(!paused)
{
controls();
update();
draw();
}
},5);
}