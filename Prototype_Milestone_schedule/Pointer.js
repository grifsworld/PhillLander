function Pointer()
{
	
	this.withinGame = false;
	
	this.x = 0;
	this.y = 0;
	
	this.ClientX  =-1;
	this.ClientY = -1;
	
	this.pageX = -1;
	this.pageY = -1;
	
	this.isDown = false;
	this.ifUp = true;
	
	this.timeDown = 0;
	this.timeUp = 0;
	
	this.totalTouches = 0;
	
}


Pointer.prototype.start = function(event)
{
	console.log("an event occured!!");
}
