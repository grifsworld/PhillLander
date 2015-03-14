 


function Background(image) {
	
	this.background = new Image();
	this.background.onload = this.onImageLoad;
	this.background.src = image;
	this.x = 0;
	this.y = 0;
	this.canvasHeight = 0;
	this.canvasWidth = 0;
	// speed at per pixel 
	this.speedx = 0;
	this.speedy = 0; 
	// Implement abstract function
	// animate background 
	this.scrollLeft = false;
	this.scrollRight = false;
	this.scrollDown = false;
	this.scrollUp = false;
}

Background.prototype.onImageLoad = function()
{
	console.log("background loaded");
}

Background.prototype.getContext = function(context, width, height)
{
	//console.log("canvas width: " + (this.x - width) + "height: " + height);
	this.context = context;
	this.canvasWidth = width;
	this.canvasHeight = height;	
	
}

Background.prototype.setSpeed = function(speedx, speedy)
{
	this.speedx = speedx;
	this.speedy = speedy;
}

Background.prototype.getDirection = function()
{

	if(this.speedx < 0)
	{
		this.scrollRight = false;
		this.scrollLeft = true;
	}
	if(this.speedx > 0)
	{
		this.scrollRight = true;
		this.scrollLeft = false;
	}
	if(this.speedy < 0)
	{
	    this.scrollUp = false;
		this.scrollDown = true;
	}
	if(this.speedy > 0)
	{
	    this.scrollUp = true;
		this.scrollDown = false;
	}
	
}
Background.prototype.draw = function()
{
	//console.log(this.speed);
	
	if(this.scrollLeft)
	{
		this.x += Math.abs(this.speedx);
	}
	if(this.scrollRight)
	{
		this.x -= Math.abs(this.speedx);
	}
	if(this.scrollUp)
	{
		this.y -= Math.abs(this.speedy);
	}
	if(this.scrollDown)
	{
		this.y += Math.abs(this.speedy); 
	}
	
		// center map
		this.context.drawImage(this.background, this.x, this.y);
		// right map
		this.context.drawImage(this.background, this.x - 1 + this.canvasWidth, this.y);
		// left map
	    this.context.drawImage(this.background, this.x + 1 - this.canvasWidth, this.y);
	    // top map
		this.context.drawImage(this.background, this.x, this.y + 1 - this.canvasHeight);
		// bottom map
		this.context.drawImage(this.background, this.x , this.y - 1 +  this.canvasHeight); 
		// bottom left map
		this.context.drawImage(this.background, this.x - 1 + this.canvasWidth , this.y - 1 +  this.canvasHeight); 
		// bottom right map
		this.context.drawImage(this.background, this.x + 1 - this.canvasWidth , this.y - 1 +  this.canvasHeight); 
		// top right map
		this.context.drawImage(this.background, this.x - 1 + this.canvasWidth, this.y + 1 -  this.canvasHeight); 
		// top left map
		this.context.drawImage(this.background, this.x + 1 - this.canvasWidth , this.y + 1 -  this.canvasHeight); 
	
	
	if(Math.abs(this.x) >= this.canvasWidth)
	{ 
		console.log("reached the end");
		this.x = 0;
	}
	if(Math.abs(this.y) >= this.canvasHeight)
	{ 
		console.log("reached the end");
		this.y = 0;
	}
	
	
}


