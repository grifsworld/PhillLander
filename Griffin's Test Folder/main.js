
var onImageLoad = function()
{
	console.log("image Loaded");
};
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var mousePosition = {
	x: 0,
	y: 0
};

var mousePressed = false;

    canvas.addEventListener('mousemove', function(event)
    {
      mousePosition.x = event.offsetX || event.layerX;
      mousePosition.y = event.offsetY || event.layerY;
    });

    canvas.addEventListener('mousedown', function(event) 
    {
      mousePressed = true;
     
    });
    canvas.addEventListener('mouseup', function(event) 
    {

      mousePressed = false;
    });


var keys;
var gameState = "off";
var paused = false;
var startButton;
var playButton;
var returnMainMenuButton;
var creditButton;
var mainMenu;
var pauseMenu;
var creditMenu;

// not yet ready, just messing with a sprite sheet for the menu 
function createMenus()
{
	//draw Main Menu
    startButton = new Button("Start Button","Game Images/StartButton.png",100,0,50,100);
    creditButton = new Button("Credit Button","Game Images/StartButton.png",100,100,50,100);
    returnMainMenuButton = new Button("Return Button","Game Images/returnButton.png",100,150,50,100);
    playButton = new Button("Play","Game Images/StartButton.png",100,150,50,100);
    mainMenu = new Menu("Main Menu");
    pauseMenu = new Menu("Pause Menu");
    creditMenu = new Menu("Credit Menu");
	
	mainMenu.addItem(startButton);
	mainMenu.addItem(creditButton);
	
	
	
	creditMenu.addItem(returnMainMenuButton);
	
	
	pauseMenu.addItem(playButton);
}

function pauseGame()
{
	console.log("paused game");
	pauseMenu.draw();
	paused = true;
}

function loadGame()
{
	var playing = false;
	
	createMenus();

	setInterval(function()
	{
		if(gameState == "off" && mainMenu.isEnabled())
		{
			mainMenu.draw();
		}
		if(startButton.inputEnabled && startButton.isClicked)
		{
			mainMenu.clear();
			gameState = "on";
		}
		if(creditButton.inputEnabled && creditButton.isClicked)
		{
		    mainMenu.clear();
			creditMenu.draw();
		}
		if(returnMainMenuButton.inputEnabled && returnMainMenuButton.isClicked)
		{
			if(paused == true)
			{
				pauseMenu.clear();
			}
			else 
			{
				creditMenu.clear();
			}
			mainMenu.draw();
		}
		if(playButton.inputEnabled && playButton.isClicked)
		{
			console.log("play button pressed");
			pauseMenu.clear();
			paused = false;
		}
		creditButton.update();
		startButton.update();
		returnMainMenuButton.update();
		playButton.update();
		
	
		
	 	if(gameState == "on" && !playing)
		{
	    
		game();
	    playing = true;
		}
		
		},5);
		
	
}



