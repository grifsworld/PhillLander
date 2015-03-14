


function Menu(name, menu)
{	
	this.name = name;
//	this.parentMenu = null;
	this.menuItem = [];
	this.menuButton = [];
	this.enabled = true;
  //  this.subMenu.push(this);
}


Menu.prototype.getName = function()
{
	return this.name;
}

Menu.prototype.getParent = function()
{
    return this.parentMenu;
}

Menu.prototype.isEnabled = function()
{
	return this.enabled;
}

//---------------- Manipulation Funcitons-------------

Menu.prototype.disable = function()
{
	this.enabled = false;
}

Menu.prototype.enable = function()
{
	this.enable = true;
}

Menu.prototype.addItem = function(item)
{
    this.menuItem.push(item);
}

Menu.prototype.addButton = function(button)
{

	this.menuButton.push(button);
}

Menu.prototype.removeItem = function(index)
{
		this.menuItem[index].clear();
}


Menu.prototype.clear = function()
{
	for(var i = 0; i < this.menuItem.length;i++)
	{
		
		this.menuItem[i].clear();
	}
	for(var i = 0; i < this.menuButton.length;i++)
	{
		this.menuButton[i].clear();
	}
	this.enabled = false;
}



Menu.prototype.draw = function()
{
	
	for(var i = 0; i < this.menuItem.length;i++)
	{
		this.menuItem[i].draw();
	}
	
	for(var i = 0; i < this.menuButton.length;i++)
	{
		this.menuButton[i].draw();
		this.menuButton[i].inputeEnabled = true;
	}
	this.enabled = true;
}

Menu.prototype.drawTopMenu = function()
{
	
}

Menu.prototype.drawCurrentMenu = function()
{
	
}


Menu.prototype.update = function()
{
	for(var i = 0; i < this.menuItem.length;i++)
	{
		this.menuItem[i].update();
	}
}
