function Sprite(img, x, y, height, width) 
{
	// if x and y are not given a value then default value will be 0
	x = x || 0;
    y = y || 0;
    
    height = height || 0;
    width = width || 0;
    
    
    this.img = new Image();
    this.img.onload = this.onImageLoad;
	this.img.src = img;
	
	// set x coordinate position 
	this.x = x;
	
	// set y coordinate position
	this.y = y;
	
	// set height of image
	this.height = height;
	
	// set width of image
	this.width = width;
}



Sprite.prototype.onImageLoad = function()
{
	console.log("Sprite loaded");
}


Sprite.prototype.draw = function()
{
	ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height
		);
}

Sprite.prototype.clear = function()
{
	ctx.clearRect(this.x,this.y,this.width,this.height);
}
