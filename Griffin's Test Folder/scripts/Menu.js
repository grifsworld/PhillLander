


function Menu(name, menu)
{	
	this.name = name;
	this.parentMenu = null;
	this.menuItem = [];
	this.drawn = false;
	this.enabled = true;
}


Menu.prototype.getName = function()
{
	return this.name;
};

Menu.prototype.getParent = function()
{
    return this.parentMenu;
};

Menu.prototype.isEnabled = function()
{
	return this.enabled;
};


Menu.prototype.disable = function()
{
	this.enabled = false;
};

Menu.prototype.enable = function()
{
	this.enable = true;
};

Menu.prototype.addItem = function(item)
{
    this.menuItem.push(item);
};

Menu.prototype.removeItem = function(index)
{
		this.menuItem[index].clear();
};

Menu.prototype.clear = function()
{
	for(var i = 0; i < this.menuItem.length;i++)
	{
		
		this.menuItem[i].clear();
	}
	this.enabled = false;
	this.drawn = false;
};

Menu.prototype.draw = function()
{
	this.drawn = true;
	for(var i = 0; i < this.menuItem.length;i++)
	{
		this.menuItem[i].draw();
	}
	this.enabled = true;
};

Menu.prototype.drawTopMenu = function()
{
	
};

Menu.prototype.drawCurrentMenu = function()
{
	
};


Menu.prototype.update = function()
{
	for(var i = 0; i < this.menuItem.length;i++)
	{
		this.menuItem[i].update();
	}
};
