

var canvas=document.getElementById("canvas");
//var backCanvas=document.getElementById("background");
//var ctx2=canvas.getContext("2d");
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

// level

var level = 1;

var keys;
var gameState = "off";
var paused = false;


// declare background Image

var playing = false;


// load levels for game 


function loadButtons()
{
	//draw Buttons needed for Menu
    startButton = new Button("Start Button","images/buttons/StartButton.png",158,487,89,256);
    creditButton = new Button("Credit Button","images/buttons/creditButton.png",792,487,89,256);
    returnButton = new Button("Return Button","images/buttons/returnButton.png",487,594,89,256);
    nextButton = new Button("Next Button", "images/buttons/nextButton.png",828,684,89,256);
    backButton = new Button("Back Button", "images/buttons/backButton.png",176,684,89,256);
   
    mainButton = new Button("Menu Button", "images/buttons/mainButton.png",504,684,89,256);
    instructButton = new Button("Instruction Button", "images/buttons/instructionButton.png",487,594,89,256);
    pauseButton = new Button("Play","images/buttons/pauseButton.png",487,594,89,256);
	
}

function loadImages()
{
	  //draw images needed for menu
    titleImage = new Sprite("images/menu/title.png",270,18,360,702);
    creditImage = new Sprite("images/menu/credits.png",360,18,461,471);
    
    // page 1 of instructions 
    instructPage1 = new Sprite("images/menu/InstructionPage1.png",78,95,467,782);
    instructPage2 = new Sprite("images/menu/InstructionPage2.png",247,95,467,782);
    instructPage3 = new Sprite("images/menu/InstructionPage3.png",247,95,467,782);
    instructPage4 = new Sprite("images/menu/InstructionPage4.png",247,95,467,782);
    instructPage5 = new Sprite("images/menu/InstructionPage5.png",247,95,549,1121);
    disabledbackButton = new Sprite("images/buttons/backButtonDisabled.png",176,684,89,256)
    disablednextButton = new Sprite("images/buttons/nextDisableButton.png",828,684,89,256)
    
}


// this is were we will create the levels and push them to the level array and draw them when needed
function loadLevels()
{
	// creates lvl1 
	var lvl1 = new Level("level 1", 1200,800);
	// add boundary image
	lvl1.addBoundary(largeMeteor);
	
	// add meteors to level
	lvl1.addMeteor(new Meteor(smallMeteor2));
	lvl1.addMeteor(new Meteor(smallMeteor3));
	
	// add background to level
	lvl1.background = background;
	
	//level.push(lvl1);
}

function createBackground()
{
	background = new Background("images/background/background.png");
	background.getContext(ctx,canvas.width,canvas.height);
}
// not yet ready, just messing with a sprite sheet for the menu 
function createMenus()
{

    mainMenu = new Menu("Main Menu");
    pauseMenu = new Menu("Pause Menu");
    creditMenu = new Menu("Credit Menu");
	instructionPage1 = new Menu("page1");
	instructionPage2 = new Menu("page2");
	instructionPage3 = new Menu("page3");
	instructionPage4 = new Menu("page4");
	instructionPage5 = new Menu("page5");
	
	// adding items to the main menu
	mainMenu.addButton(startButton);
	mainMenu.addButton(creditButton);
	mainMenu.addButton(instructButton);
	mainMenu.addItem(titleImage);
	 
	
	// adding items to the credit menu
	creditMenu.addItem(creditImage);
	creditMenu.addButton(returnButton);
	
	
	// adding items to the pause menu
	pauseMenu.addButton(pauseButton);
	
	
	// add instructions Page 1 menu
	instructionPage1.addButton(nextButton);
	instructionPage1.addButton(mainButton);
	instructionPage1.addItem(disabledbackButton);
	instructionPage1.addItem(instructPage1);
	
	// add instructions page 2 menu

	instructionPage2.addButton(nextButton);
	instructionPage2.addButton(backButton);
	instructionPage2.addButton(mainButton);
	instructionPage2.addItem(instructPage2);
	
	// add instructions page 3 menu

	instructionPage3.addButton(nextButton);
	instructionPage3.addButton(backButton);
	instructionPage3.addButton(mainButton);
	instructionPage3.addItem(instructPage3);
	
	
	// add instructions page 4 menu
	instructionPage4.addButton(nextButton);
	instructionPage4.addButton(backButton);
	instructionPage4.addButton(mainButton);
	instructionPage4.addItem(instructPage4);
	
	// add instructions page 5 menu
	instructionPage5.addItem(disablednextButton);
	instructionPage5.addButton(backButton);
	instructionPage5.addButton(mainButton);
	instructionPage5.addItem(instructPage5);
	
}


function loadGame()
{
	loadImages();
	loadButtons();
	console.log("loaded game");
	createMenus();
	createBackground();
	makeBoundary();
	initMeteors(level);
	randEvent();
	background.draw();
	startGame();
	mainMenu.draw();
	
}

function startGame()
{
	console.log("drawing menu");
	music.play('title');
	music.volume(0.3);
	
	setInterval(function()
	{
		
		if(gameState == "off" && mainMenu.enabled )
		{
			//console.log("drawing main menu");
			mainMenu.draw();
		}
		if(startButton.inputEnabled && startButton.isClicked)
		{
			console.log("start game clicked");
			mainMenu.clear();
			music.stop('title');
			music.play('level1');
			music.volume(0.25);
			gameState = "on";
		}
		if(creditButton.inputEnabled && creditButton.isClicked)
		{
			console.log("credits menu clicked");
		//    mainMenu.clear();
		
		    mainMenu.clear();
		    background.draw();
			creditMenu.draw();
		}
		if(instructButton.inputEnabled && instructButton.isClicked)
		{
			console.log("instruction page1 menu clicked");
		    mainMenu.clear();
		    background.draw();
			instructionPage1.draw();
		}
		if(instructButton.inputEnabled && instructButton.isClicked)
		{
		    mainMenu.clear();
		    background.draw();
			instructionPage1.draw();
		}
		if(nextButton.inputEnabled && nextButton.isClicked)
		{
			if(instructionPage1.isEnabled())
			{
				instructionPage1.clear();
		   		background.draw();
				instructionPage2.draw();
			}
			else if(instructionPage2.isEnabled())
			{
				instructionPage2.clear();
			    background.draw();
				instructionPage3.draw();
			}
			else if(instructionPage3.isEnabled())
			{
				instructionPage3.clear();
			    background.draw();
				instructionPage4.draw();
			}
			else if(instructionPage4.isEnabled())
			{
				instructionPage4.clear();
			    background.draw();
				instructionPage5.draw();
			}
		    
		}
		if(backButton.inputEnabled && backButton.isClicked)
		{
			if(instructionPage2.isEnabled())
			{
				instructionPage2.clear();
			    background.draw();
				instructionPage1.draw();
			}
			else if(instructionPage3.isEnabled())
			{
				instructionPage3.clear();
			    background.draw();
				instructionPage2.draw();
			}
			else if(instructionPage4.isEnabled())
			{
				instructionPage4.clear();
			    background.draw();
				instructionPage3.draw();
			}
			else if(instructionPage5.isEnabled())
			{
				instructionPage5.clear();
			    background.draw();
				instructionPage4.draw();
			}
		}
		if(mainButton.inputEnabled && mainButton.isClicked)
		{
			if(instructionPage1.isEnabled)
			{
				instructionPage1.clear();
			}
			if(instructionPage2.isEnabled)
			{
				instructionPage2.clear();
			}
		    
		    background.draw();
			mainMenu.draw();
		}
		if(returnButton.inputEnabled && returnButton.isClicked)
		{
			console.log("return to menu button clicked");
			creditMenu.clear();
			background.draw();
			mainMenu.draw();
		}
		if(paused)
		{
			music.pause('level1');
			pauseMenu.draw();
		}
		if(pauseButton.inputEnabled && pauseButton.isClicked)
		{
			console.log("on pause button pressed" + playing);
			pauseMenu.clear();
			paused = false;
		}
		creditButton.update();
		startButton.update();
		returnButton.update();
		pauseButton.update();
		instructButton.update();
		mainButton.update();
		backButton.update();
		nextButton.update();
// commented out game() so the game wont start, its still not ready yet 
	 	if(gameState == "on" && !playing)
		{    
			game();
		    playing = true;
		}
		},5);
}


