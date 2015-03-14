 

var canvas=document.getElementById("canvas");
var backCanvas=document.getElementById("background");
var ctx2=canvas.getContext("2d");
var ctx=canvas.getContext("2d");
var mousePosition =
 {
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
var titleImage;
var background;
var playing = false;
function createBackground()
{
	background = new Background("images/background/background.png");
	background.scrollRight = false;
	background.getContext(ctx2,backCanvas.width,backCanvas.height);
	
}
// not yet ready, just messing with a sprite sheet for the menu 
function createMenus()
{
	//draw Buttons needed for Menu
    startButton = new Button("Start Button","images/menu/Button(StartGame).png",360,408,148,473);
    creditButton = new Button("Credit Button","images/menu/Button(Credits).png",360,570,149,475);
    returnButton = new Button("Return Button","images/menu/Button(Return).png",360,570,149,475);
    
    //draw images needed for menu
    titleImage = new Sprite("images/menu/title.png",270,18,360,702);
    
    playButton = new Button("Play","images/menu/Button(Return).png",360,570,149,475);
    mainMenu = new Menu("Main Menu");
    pauseMenu = new Menu("Pause Menu");
    creditMenu = new Menu("Credit Menu");
	
	// adding items to the main menu
	mainMenu.addItem(startButton);
	mainMenu.addItem(creditButton);
	mainMenu.addItem(titleImage);
	
	
	// adding items to the credit menu
	creditMenu.addItem(titleImage);
	creditMenu.addItem(returnButton);
	
	// adding items to the pause menu
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
	
	console.log("loaded game");
	createMenus();
	createBackground();
	makeBoundary();
	buildMaze();
	initMeteors();
	randEvent();
	background.draw();
	startGame();
		
	
}

function startGame()
{	
	setInterval(function()
	{
		
		if(gameState == "off" && mainMenu.enabled )
		{
			
			//console.log("drawing main menu");
			mainMenu.draw();
		}
		if(startButton.inputEnabled && startButton.isClicked)
		{
			mainMenu.clear();
			gameState = "on";
		}
		if(creditButton.inputEnabled && creditButton.isClicked)
		{
			//console.log("drawing main menu");
		    mainMenu.clear();
		    background.draw();
			creditMenu.draw();
		}
		if(returnButton.inputEnabled && returnButton.isClicked)
		{
			creditMenu.clear();
			background.draw();
			mainMenu.draw();
		}
		if(paused)
		{
			pauseMenu.draw();
		}
		if(playButton.inputEnabled && playButton.isClicked)
		{
			console.log("play button pressed");
			pauseMenu.clear();
			paused = false;
		}
		creditButton.update();
		startButton.update();
		returnButton.update();
		playButton.update();

	 	if(gameState == "on" && !playing)
		{    
			game();
		    playing = true;
		}
		},5);
}


