var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Pluto = {img: null, x: 300, y: 0,
             width: 200, height: canvas.height, sprite: "Pluto.png"};
Pluto.img = new Image();
Pluto.img.src = Pluto.sprite;

var Rock1 = {img: null, x: -100, y: 100,
             width: 50, height: 50, sprite: "Meteor.png"};
Rock1.img = new Image();
Rock1.img.src = Rock1.sprite;

var Rock2 = {img: null, x: -100, y: 300,
             width: 50, height: 50, sprite: "Meteor.png"};
Rock2.img = new Image();
Rock2.img.src = Rock2.sprite;

var Rock3 = {img: null, x: -100, y: 500,
             width: 50, height: 50, sprite: "Meteor.png"};
Rock3.img = new Image();
Rock3.img.src = Rock3.sprite;

var gravity = 0;


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
	var Charon = {img: null, x: 500, y: 300,
             width: 200, height: 200, sprite: "Charon.png"};
    Charon.img = new Image();
    Charon.img.src = Charon.sprite;
    
    
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
	rock = new meteor(10, 10, 10 ,10, "Meteor.png");
	
	for(var i = 0; i < rocks.length; i++){
        var obj = rocks[i];
        ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}

function endphase2(){
	clearTimeout(phase2());
}

function phase3(){
	
	//fire rockets at Phil
	
	setInterval(function(){
	    var Rocket = {img: null, x: 500, y: 350, rotation: 0,
	                  width: 300, height: 100, sprite: "Rocket.png"};
	    Rocket.img = new Image();
        Rocket.img.src = Rocket.sprite;
    
    
        var xRoc = player.x - Rocket.x;
        var yRoc = player.y - Rocket.y;
    
        var Rangle = Math.atan2(yRoc, xRoc);
    
        Rocket.rotation = Rangle;
    
        var xvelRoc = Math.cos(Rangle) * 5;
        var yvelRoc = Math.sin(Rangle) * 5;
    
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
        if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(object1.x < Rx1 && Px1 > Rx1 && object1.y < object2.y && Py1 > object2.y){
        if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(objec1.x < object2.x && Px1 > object2.x && object1.y < Ry1 && Py1 > Ry1){
        if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }else if(object1.x < Rx1 && Px1 > Rx1 && object1.y < Ry1 && Py1 > Ry1){
        if (shield > 0) shield -= 40;
        else if(shield <= 0) health -= 40;
    }
}

function endphase3(){
	clearTimeout(phase3());
}

function phase4(){
	
	//use the power of gravity
	
	Charon = {img: null, x: -200, y: 300,
             width: 200, height: 200, sprite: "Charon.png"};
    Charon.img = new Image();
    Charon.img.src = Charon.sprite;
	
	
	setInterval(function(){
		if(gravity < 3){
			gravity += 0.05;
		}
		xvel += gravity;
	}, 100);
	
	setInterval(function(){
	   Rock1.x += 5;
	   Charoncrash(Rock1, player);
	   Rock2.x += 10;
	   Charoncrash(Rock2, player);
	   Rock3.x += 7;
	   Charoncrash(Rock3, player);
    }, 10)
	
	setTimeout(function(){
	    setInterval(function(){
	        Charon.x += 5;
            Charoncrash(Charon, player);
            defeat(Charon, Pluto);
        }, 5);
	}, 55000);
}

function defeat(weapon, boss){
   if(weapon.x + (weapon.width)/2 >= boss.x){
       weapon.x = 1800;
       weapon.y = 700;
       //insert win condition
   }
}

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

