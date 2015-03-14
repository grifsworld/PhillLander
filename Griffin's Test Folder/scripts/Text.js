function Text(text,style,x,y)
{
	// if x and y are not given a value then default value will be 0
	x = x || 0;
    y = y || 0;
    
    text = text || ' ';
    style = style || {};
    
    
    if (text.length === 0)
    {
        text = ' ';
    }
    else 
    {
    	text = text.toString();
    }
	this.text = text;
	this.style = style;
	this.x = x;
	this.y = y;
	
	// array of colors
	this.color =  [];
	
	// defualt font Size
	this.fontSize = 12;
	
	// if exists = false text will not be updated 
	this.exist = true;
	
	
}



Text.prototype.setFontSize = function(fontSize)
{
	this.fontSize = fontSize;
}

Text.prototype.addColor = function(newColor)
{
	this.color.push(newColor);
}


Text.prototype.setShadow = function(x,y,color,blur)
{
	if (typeof x === 'undefined') { x = 0; }
    if (typeof y === 'undefined') { y = 0; }
    if (typeof color === 'undefined') { color = 'rgba(0, 0, 0, 1)'; }
    if (typeof blur === 'undefined') { blur = 0; }

    this.style.shadowOffsetX = x;
    this.style.shadowOffsetY = y;
    this.style.shadowColor = color;
    this.style.shadowBlur = blur;
}


Text.prototype.setStyle = function(style)
{
	style = style || {};
    style.font = style.font || 'bold 20pt Arial';
    style.fill = style.fill || 'black';
    style.align = style.align || 'left';
    style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
    style.strokeThickness = style.strokeThickness || 0;
    style.wordWrap = style.wordWrap || false;
    style.wordWrapWidth = style.wordWrapWidth || 100;
    style.shadowOffsetX = style.shadowOffsetX || 0;
    style.shadowOffsetY = style.shadowOffsetY || 0;
    style.shadowColor = style.shadowColor || 'rgba(0,0,0,0)';
    style.shadowBlur = style.shadowBlur || 0;

    this.style = style;
    this.dirty = true;

}
Text.prototype.draw()
{
	if(this.visible)
	{
		
	}
	
}


Text.prototype.clearColors = function () {

    this.colors = [];

};