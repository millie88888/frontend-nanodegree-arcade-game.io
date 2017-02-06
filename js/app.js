// Enemy
// Player
// Gem 
var scoreCount = 0;

//<-------------Enemy section------------>//

// Create Enemy object for width, hight, 
// speed(getRandomInt with getRandomInt function) 
// and sprite for the ememy picture.
var Enemy = function() {
    this.w = 101;
    this.h = 171;
    this.speed = Math.random() * 300 + 50;
    this.sprite = 'images/enemy-bug.png';
};

//UPDATE Enemy's position
//Parameter: dt, a time delta between ticks 
Enemy.prototype.update = function(dt) {

    if (this.x < 505) {
        this.x += this.speed * dt;
    } else {
        this.x = -Math.random() * 5;
    }

};

// RENDER for draw Enemy object and also with method
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




//<-------------Player section------------>//

// Create Player object for x, y, width, hight,
// and sprite for the ememy picture.
var Player = function() {
    this.x = 202;
    this.y = 404;
    this.w = 101;
    this.h = 171;
    this.sprite = 'images/char-princess-girl.png';
};

//UPDATE for Player's posistion
//collsion, reset, to reach the water and get gems
Player.prototype.update = function(dt) {
    if (this.collision()) {
        this.reset();
    }

    if (this.y < 1) {
        alert("YOU SAFE!");
        this.reset();
    }

    this.gemCollect();

};

// RENDER for draw Player object and also with method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//  HANDLEINPUT class is for Player's direction
Player.prototype.handleInput = function(direction) {
    if (direction === 'down' && this.y < 400) {
        this.y += 83;
    }

    if (direction === 'right' && this.x < 400) {
        this.x += 101;
    }

    if (direction === 'up' && this.y > 0) {
        this.y -= 83;
    }

    if (direction === 'left' && this.x > 10) {
        this.x -= 101;
    }


};

// RESET class is for reset position and score"0" for Player
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
    scoreCount = 0;
    document.getElementById("scoreCounter").innerHTML = scoreCount;
};

// COLLISION class is for Player colide with bugs
Player.prototype.collision = function() {

    for (var redbug = 0; redbug < allEnemies.length; redbug++) {
        if (this.x < allEnemies[redbug].x + 50 &&
            this.x + 50 > allEnemies[redbug].x &&
            this.y < allEnemies[redbug].y + 30 &&
            this.y + 30 > allEnemies[redbug].y) {
            this.reset();
            scoreCount -= 0;
            document.getElementById("scoreCounter").innerHTML = scoreCount;
        }
    }
};


// GEMCOLLECT class is for player get gems and adds scores up
Player.prototype.gemCollect = function() {
    if (this.x < gem.x + gem.w &&
        this.x + this.w > gem.x &&
        this.y < gem.y + gem.h &&
        this.h + this.y > gem.y) {

        gem.x = Math.round(Math.random() * 560) + 1;
        gem.y = Math.round(Math.random() * 360) + 70;

        scoreCount += 25;
        document.getElementById("scoreCounter").innerHTML = scoreCount;
    }
};



//<-------------Gem section------------>//
// Create Gem object for x, y, width, hight,
// and sprite for the gem picture.
var Gem = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 85;
    this.h = 50;
    this.sprite = 'images/Star.png';

};

// RENDER for draw Gem object and also with method
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 101, 171);
};

// randomGemX is for gem's X are show random on the screen
var randomGemX = function() {
    return Math.round(Math.random() * 560) + 1;
};

// randomGemY is for gem's Y are show random on the screen
var randomGemY = function() {
    return Math.round(Math.random() * 360) + 70;
};




//<-------------instantiate objects ------------>
var firstEnemy = new Enemy();
firstEnemy.x = -101;
firstEnemy.y = 62;

var secondEnemy = new Enemy();
secondEnemy.x = -101;
secondEnemy.y = 145;

var thirdEnemy = new Enemy();
thirdEnemy.x = -101;
thirdEnemy.y = 228;

var allEnemies = [firstEnemy, secondEnemy, thirdEnemy];
var player = new Player();
var gem = new Gem(randomGemX(), randomGemY());


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
