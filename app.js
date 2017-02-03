// Enemy
// Player
// Gem 

var Enemy = function () {
    this.x;
    this.y;
    this.w = 101;
    this.h = 171;
    this.speed = getRandomInt(100,300);
    this.sprite = 'images/enemy-bug.png'
};

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 10)) + min;
}


Enemy.prototype.update = function(dt) {

    if(this.x < 500){
        this.x += this.speed * dt;
    } else {
        this.x = -Math.random() * 100;
    }

};

Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Player = function () {
    this.x = 200;
    this.y = 400;
    this.w = 101;
    this.h = 171;
    this.sprite = 'images/char-boy.png'
};


Player.prototype.update = function(dt) {
    if (this.collision()) {
    this.reset();
  }

    if (this.y < 11) {
        alert("YOU WIN!");
        this.reset();
    }


};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(direction) {

    if (direction === 'down' && this.y < 400) {
        this.y += 85;
    }

    if (direction === 'right' && this.x < 400) {
        this.x += 100;
    }

    if (direction === 'up' && this.y > 0) {
        this.y -= 85;
    }

    if (direction === 'left' && this.x > 0) {
        this.x -= 100;
    }    

};


Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
};

Player.prototype.collision = function() {

  for (var bugggg = 0; bugggg < allEnemies.length; bugggg++) {
    if (this.x < allEnemies[bugggg].x + 50 && 
        this.x + 50 > allEnemies[bugggg].x && 
        this.y < allEnemies[bugggg].y + 30 && 
        this.y + 30 > allEnemies[bugggg].y) {
        this.reset();

    }
  }

  for ( var gemmm = 0; gemmm < allGem.length; gemmm++) {
    if (this.x < allGem[gemmm].x + 50 &&
        this.x + 50 > allGem[gemmm].x &&
        this.y < allGem[gemmm].y + 30 &&
        this.y + 30 > allGem[gemmm].y){
        allGem.splice(gemmm, 1);
    }   
  }

};



var Gem = function(x, y) {

    this.x = x;
    this.y = y;
    this.w = 85;
    this.h = 50;
    this.sprite = 'images/Gem Blue.png'

}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 10)) + min;
}

Gem.prototype.update = function(dt) {
   this.x = Math.floor(Math.random() * 1 +1) * 100;
   this.y = Math.floor(Math.random() * 1 +1) * 100;
};





var firstEnemy = new Enemy();
firstEnemy.x = -101;
firstEnemy.y = 62;

var secondEnemy = new Enemy();
secondEnemy.x = -101;
secondEnemy.y = 145;

var thirdEnemy = new Enemy();
thirdEnemy.x = -101;
thirdEnemy.y = 228;

var fourthEnemy = new Enemy();
fourthEnemy.x = -505;
fourthEnemy.y = 62;

var allEnemies = [firstEnemy, secondEnemy, thirdEnemy, fourthEnemy];

var player = new Player();

var allGem = [new Gem(100,240), new Gem(400, 150), new Gem(300,70), new Gem(0, 80)];





document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/*
// Enemy
// Player
// Gem 

var Enemy = function () {
    this.x;
    this.y;
    this.w = 101;
    this.h = 171;
    this.speed = getRandomInt(100,300);
    this.sprite = 'images/enemy-bug.png'
};

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 10)) + min;
}


Enemy.prototype.update = function(dt) {

    if(this.x < 500){
        this.x += this.speed * dt;
    } else {
        this.x = -Math.random() * 300;
    }

};

Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Player = function () {
    this.x = 200;
    this.y = 400;
    this.w = 101;
    this.h = 171;
    this.sprite = 'images/char-boy.png'
};


Player.prototype.update = function(dt) {
    if (this.collision()) {
    this.reset();
  }

    if (this.y < 11) {
        alert("YOU WIN!");
        this.reset();
    }


};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(direction) {

    if (direction === 'down' && this.y < 400) {
        this.y += 85;
    }

    if (direction === 'right' && this.x < 400) {
        this.x += 100;
    }

    if (direction === 'up' && this.y > 0) {
        this.y -= 85;
    }

    if (direction === 'left' && this.x > 0) {
        this.x -= 100;
    }    

};


Player.prototype.reset = function() {
    this.x = 202;
    this.y = 404;
};

Player.prototype.collision = function() {
  // For loop checks if enemy has collided with player.
  // If they collide, player resets location.
  for (var bugggg = 0; bugggg < allEnemies.length; bugggg++) {
    if (this.x < allEnemies[bugggg].x + 50 && 
        this.x + 50 > allEnemies[bugggg].x && 
        this.y < allEnemies[bugggg].y + 30 && 
        this.y + 30 > allEnemies[bugggg].y) {
        this.reset();

    }
  }            




};






var firstEnemy = new Enemy();
firstEnemy.x = -101;
firstEnemy.y = 62;

var secondEnemy = new Enemy();
secondEnemy.x = -101;
secondEnemy.y = 145;

var thirdEnemy = new Enemy();
thirdEnemy.x = -101;
thirdEnemy.y = 228;

var fourthEnemy = new Enemy();
fourthEnemy.x = -505;
fourthEnemy.y = 62;

var allEnemies = [firstEnemy, secondEnemy, thirdEnemy, fourthEnemy];

var player = new Player();





document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

*/

