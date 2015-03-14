var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var Xdis = player.x - obj.x;
var Ydis = player.y - obj.y;
	
var sqx = Math.pow(Xdis, 2);
var sqy = Math.pow(Ydis, 2);
	
var sqh = sqx + sqy;
	
var Hdis = Math.sqrt(sqh);
	
var speed = 3/Hdis;
	
var angle = Math.atan2(Ydis, Xdis);
	
obj.rotation = angle;
	
var Xspeed = Math.cos(angle) * speed;
var YSpeed = Math.sin(angle) * speed;

obj.x += Xspeed;
obj.y += Yspeed;

delete obj;


function collision(image1, image2){
	
    var mx1 = image1.x;
    var Mx1 = image1.x + image1.width;
    var my1 = image1.y;
    var My1 = image1.y + image.height;
    var mx2 = image2.x;
    var Mx2 = image2.x + image2.width;
    var my2 = image2.y;
    var My2 = image2.y + image2.width;
	
	// 0 <= x < 1, 0 <= y < 1
    if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
       }  
    
    //0 <= x < 1, 1 <= y < 2    
    }else if(0 <= Math.abs(xvel) < 1 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       } 
    
    //1 <= x < 2, 0 <= y < 1   
    }else if(1 <= Math.abs(xvel) < 2 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       }
    
    //1 <= x < 2, 1 <= y < 2
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       }
    //0 <= x < 1, 2 <= y < 3
    }else if(0 <= Math.abs(xvel) < 1 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //1 <= x < 2, 2 <= y 3
    }else if(1 <= Math.abs(xvel) < 2 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 2 <= y < 3
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 1 <= y < 2
    }else if(2 <= Math.abs(xvel) < 3 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 0 <= y < 1
    }else if(2 <= Math.abs(xvel) < 3 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    // x = 3 or y = 3
    }else if(Math.abs(xvel) == 3 || Math.abs(yvel) == 3){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
       }
    }
}



