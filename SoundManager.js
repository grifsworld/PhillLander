/**
 * Ensure the game sound has loaded before starting the game
 */
function checkReadyState() {
	if (game.gameOverAudio.readyState === 4 && game.backgroundAudio.readyState === 4) {
		window.clearInterval(game.checkAudio);
		document.getElementById('loading').style.display = "none";
		game.start();
	}
}


function SoundPool(maxSize) {
	var size = maxSize; // Max sounds allowed in the pool
	var pool = [];
	this.pool = pool;
	var currSound = 0;
	/*
	 * Populates the pool array with the given sound
	 */
	this.init = function(object) {
		if (object == "charging") {
			for (var i = 0; i < size; i++) {
				// Initalize the sound
				charging = new Audio("Audio/SFX/Charging.ogg");
				charging.volume = .12;
				charging.load();
				pool[i] = charging;
			}
		}
		else if (object == "explosion") {
			for (var i = 0; i < size; i++) {
				var explosion = new Audio("Audio/SFX/Small Explosion.wav");
				explosion.volume = .1;
				explosion.load();
				pool[i] = explosion;
			}
		}
	};
	/*
	 * Plays a sound
	 */
	this.get = function() {
		if(pool[currSound].currentTime == 0 || pool[currSound].ended) {
			pool[currSound].play();
		}
		currSound = (currSound + 1) % size;
	};
}