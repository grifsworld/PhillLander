

function Button(text,imgURL, x, y, height, width)
{

	this.text = text;
	this.img = new Image();
	this.img.src = imgURL;
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


Button.prototype.x = function()
{
	return this.x;
}

Button.prototype.y = function()
{
	return this.y;
}

Button.prototype.width = function()
{
	return this.width;
}

Button.prototype.height = function()
{
	return this.height;
}


// returns text on Button
Button.prototype.getText = function()
{
	return this.text;
}

Button.prototype.isEnabled = function()
{
	return this.inputEnabled;
}


//---------------- Manipulation Funcitons-------------

Button.prototype.disableButton = function()
{
	this.inputEnabled = false;
}


Button.prototype.enableButton = function()
{
	this.inputEnabled = true;
}


Button.prototype.draw= function()
{
	ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height
		);
	this.inputEnabled = true;
}

Button.prototype.clear = function()
{
	ctx.clearRect(this.x,this.y,this.width,this.height);
	this.inputEnabled = false;
	this.isClicked = false;
}


Button.prototype.update = function()
{
	if(this.inputEnabled == true)
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
         		 	   
         		 	    
                   }
                   else
                   {
                   	this.isClicked = false;
                   }            	
	            }

    }
    else
    {
   // 	console.log(this.name + " button is disabled ");
    }
}


