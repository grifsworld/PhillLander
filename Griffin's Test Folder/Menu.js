


function Menu(name, menu)
{	
	this.name = name;
//	this.parentMenu = null;
	this.menuItem = [];
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
// 
// Menu.prototype.addSubMenu = function(name)
// {	
	// name.parentMenu = this;
	// this.subMenu.push(name);
// }


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
	this.enabled = false;
}

Menu.prototype.draw = function()
{
	for(var i = 0; i < this.menuItem.length;i++)
	{
		this.menuItem[i].draw();
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
