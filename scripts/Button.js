

function Button(name,img, x, y, height, width)
{

	this.name = name;
	this.enabledimg = new Image();
	this.enabledimg.onload = this.onImageLoad;
	this.enabledimg.src = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.down = false;
	this.over = false;
	//this.func = func;
	this.up = true;
	this.isClicked = false;
	this.inputEnabled = false;
}

Button.prototype.onImageLoad = function()
{
	console.log("Button Image loaded");
}


//---------------- Manipulation Funcitons-------------


Button.prototype.draw= function()
{
//	console.log("drawing");
	
	this.inputEnabled = true;
	ctx.drawImage(this.enabledimg,this.x,this.y,this.width,this.height);
		
	
}

Button.prototype.clear = function()
{
	ctx.clearRect(this.x,this.y,this.width,this.height);
	this,display = false;
	this.inputEnabled = false;
	this.isClicked = false;
}


Button.prototype.setDisableImage = function(image)
{
	
	this.disabledImg = new Image();
	this.disabledImg.src = image;
}

Button.prototype.update = function()
{
	//console.log("update" + this.name + " " + this.inputEnabled);
	
	if(this.inputEnabled)
	{
		if(mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
	            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height)
	            {
	            	this.over = true;
	            	if(mousePressed)
	            	{
	            		
	            		 // if (typeof this.func === 'function' && !isClicking) 
	            		 // {
          		    	 // this.func();
         			     // isClicking = true;
         		 	    // }
         		 	 
         		 	  this.isClicked = true;
         		 	  mousePressed = false;
                   }
                   else
                   {
                   	this.isClicked = false;
                   }            	
	            }

    }
}


