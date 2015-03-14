var Pluto = {img: null, x: 800, y: 0,
             width: 400, height: canvas.height, sprite: "images/Pluto/Pluto.png"};
Pluto.img = new Image();
Pluto.img.src = Pluto.sprite;

var Charon = {img: null, x: 1200, y: 250,
             width: 300, height: 300, sprite: "images/Pluto/Charon.png"};
Charon.img = new Image();
Charon.img.src = Charon.sprite;

var Rock1 = {img: null, x: -100, y: 100,
             width: 150, height: 150, sprite: "images/meteors/Meteor2.png"};
Rock1.img = new Image();
Rock1.img.src = Rock1.sprite;

var Rock2 = {img: null, x: -100, y: 250,
             width: 150, height: 150, sprite: "images/meteors/Meteor2.png"};
Rock2.img = new Image();
Rock2.img.src = Rock2.sprite;

var Rock3 = {img: null, x: -100, y: 600,
             width: 150, height: 150, sprite: "images/meteors/Meteor2.png"};
Rock3.img = new Image();
Rock3.img.src = Rock3.sprite;

var Rocket = {img: null, x: 1200, y: 300,
	          width: 400, height: 200, sprite: "images/Pluto/Rocket.png"};
Rocket.img = new Image();
Rocket.img.src = Rocket.sprite;

var gravity = 0;

function startmeteors(){
    meteors.push(new meteor(-100,-100, 100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(200,-100,100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(800,-100,100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(1100,-100, 100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(-100,-800,100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(200,-800, 100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(800,-800, 100,100, "images/meteors/Meteor.png"));
    meteors.push(new meteor(1100,-800,100,100, "images/meteors/Meteor.png"));
}


function crash(){
	var C1 = player.x + player.width;
	
    if(C1 > Pluto.x){
    	health -= 100;
    }
}

function Charoncrash(thing1, thing2){
    var cx1 = thing1.x;
    var Cx1 = thing1.x + thing1.width;
    var cy1 = thing1.y;
    var Cy1 = thing1.y + thing1.height;
    var cx2 = thing2.x;
    var Cx2 = thing2.x + thing2.width;
    var cy2 = thing2.y;
    var Cy2 = thing2.y + thing2.height;
    
    if(cx1 >= cx2 && cx1 <= Cx2 && cy1 >= cy2 && cy1 <= Cy2){
        health -= 100;
        
    }else if(cx1 >= cx2 && cx1 <= Cx2 && Cy1 >= cy2 && Cy1 <= Cy2){
        health -= 100;
          
    }else if(Cx1 >= cx2 && Cx1 <= Cx2 && cy1 >= cy2 && cy1 <= Cy2){
        health -= 100;
          
    }else if(Cx1 >= cx2 && Cx1 <= Cx2 && Cy1 >= cy2 && Cy1 <= Cy2){
        health -= 100;
        
    }
}

function phase1(){
	
	//toss Charon at Phil
	Charon.x = 1200;
	Charon.y = 250;
    
    
    setInterval(function(){
        Charon.x -= 1;
        Charoncrash(Charon, player);
    }, 8);
}

function endphase1(){
	clearTimeout(phase1());
}

function phase2(){
	
	//call ten meteors
	startmeteors();
	setInterval(function(){
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
		   Xspeed = speed * cosp;
		   sinp = Math.sin(angle);
		   Yspeed = speed * sinp;
		   if(Hdis <= 600){
		       obj.x += Xspeed - xvel;
		   	   obj.y += Yspeed - yvel;
		   }else{
		   	   obj.x -= xvel;
		   	   obj.y -= yvel;
		   }
		   collision(obj,player);
        } 
  }, 5);
}

function endphase2(){
	meteors = [];
	clearTimeout(phase2());
}

var xRoc;
var yRoc;
var Rangle;
var xvelRoc;
var yvelRoc;


function phase3(){
	
	//fire rockets at Phil
	
	setInterval(function(){
	    Rocket.x = 1200;
	    Rocket.y = 300;
    
    
        xRoc = player.x - Rocket.x;
        yRoc = player.y - Rocket.y;
    
        Rangle = Math.atan2(yRoc, xRoc);
    
        xvelRoc = Math.cos(Rangle) * 5;
        yvelRoc = Math.sin(Rangle) * 5;
    
        setInterval(function(){
            Rocket.x += xvelRoc;
            Rocket.y += yvelRoc;
            RocketCollide(player, Rocket);
        }, 5);
    }, 3000);
}

function RocketCollide(object1, object2){
    var Rx1 = Rocket.x + Rocket.width;
    var Ry1 = Rocket.y + Rocket.height;
        
    var Px1 = player.x + player.width;
    var Py1 = player.y + player.height;

    if(object1.x < Rocket.x && Px1 > object2.x && object1.y < object2.y && Py1 > object2.y){
        if(opened == true) health -= 40;
        else if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(object1.x < Rx1 && Px1 > Rx1 && object1.y < object2.y && Py1 > object2.y){
        if(opened == true) health -= 40;
        else if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(objec1.x < object2.x && Px1 > object2.x && object1.y < Ry1 && Py1 > Ry1){
        if(opened == true) health -= 40;
        else if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(object1.x < Rx1 && Px1 > Rx1 && object1.y < Ry1 && Py1 > Ry1){
        if(opened == true) health -= 40;
        else if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }
}

function endphase3(){
	clearTimeout(phase3());
}

function phase4(){
	
	//use the power of gravity
	
	Charon.x = -200;
	Charon.y = 250;
	
	setInterval(function(){
		if(gravity < 3){
			gravity += 0.05;
			player.x += gravity;
		}
	}, 1000);
	
	setTimeout(function(){
	    setInterval(function(){
	        Rock1.x += 5;
	        Charoncrash(Rock1, player);
	        Rock2.x += 10;
	        Charoncrash(Rock2, player);
	        Rock3.x += 7;
	        Charoncrash(Rock3, player);
        }, 10);
    }, 160000);
	
	setTimeout(function(){
	    setInterval(function(){
	        Charon.x += 5;
            Charoncrash(Charon, player);
            defeat(Charon, Pluto);
        }, 5);
	}, 190000);
}

function endphase4(){
    clearTimeout(phase4());
}

function defeat(weapon, boss){
   if(weapon.x + (weapon.width)/2 >= boss.x){
       weapon.x = -1000;
       weapon.y = -1000;
       Pluto.x = -2000;
       Pluto.y = -2000;
       //insert win condition
       alert("YOU WIN!!!");
       location.reload();
   }
}

meteors = [];
setTimeout(phase1(), 5000);
setTimeout(endphase1(), 15000);
clearTimeout(endphase1());

setTimeout(phase2(), 15000);
setTimeout(endphase2(), 75000);
clearTimeout(endphase2());

setTimeout(phase3(), 75000);
setTimeout(endphase3(), 135000);
clearTimeout(endphase3());

setTimeout(phase4(), 135000);
setTimeout(endphase4(), 220000);
clearTimeout(endphase4());

