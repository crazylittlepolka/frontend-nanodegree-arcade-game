// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.width = 101;
    this.height = 171;

    //from https://www.youtube.com/watch?v=uAfw-ko3kB8
    //and from from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    this.intersects = function(player) {
      if(player.x < this.x + this.width/2 &&
       player.x + player.width/2 > this.x &&
       player.y < this.y + this.height/2 &&
       player.height/3 + player.y > this.y){
         return true;
       }else {
         return false;
       }
      }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;

    if (this.x > 500){
      this.x = -100;
    }
    if(this.intersects(player)) {
      document.location.reload(true);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
        this.width = 101;
        this.height = 171;
    }
    update(){};
    render(){};
    handleInput(){};
  }

Player.prototype.update = function(dt) {
  if (player.y === -15){
    document.location.reload(true);
  };
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(move){
   if(move === 'left' && this.x >= 100){
       this.x -= 100;
       }
       if(move === 'up' && this.y >= 30){
       this.y -= 83;
       }
       if(move === 'right' && this.x <= 305){
       this.x += 100;
       }
       if(move === 'down' && this.y <= 350){
       this.y += 83;
       }
};

//class for for incentives - stars and gems
class Stars {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.width = 101;
    this.height = 171;
    this.status = 1;
  }
  update(){};
  render(){};
  intersects(player) {
    if(player.x < this.x + this.width/2 &&
     player.x + player.width/2 > this.x &&
     player.y < this.y + this.height/3 &&
     player.height/3 + player.y > this.y){
       return true;
     }else {
       return false;
     }
    }
}

Stars.prototype.update = function() {
  if(this.intersects(player)) {
    console.log('a star!')
    
  }
};

Stars.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.

let enemy1 = new Enemy(-150, 60, 105);
let enemy2 = new Enemy(0, 143, 60);
let enemy3 = new Enemy(-100, 226, 80);
let enemy4 = new Enemy(-300, 143, 75)

// Place all enemy objects in an array called allEnemies

const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4);


// Place the player object in a variable called player
let player = new Player(205, 400);

let star1 = new Stars (0, 236, 'images/star.png');
let star2 = new Stars (305, 73, 'images/star.png');
let star3 = new Stars (400, 236, 'images/star.png');

const allStars = [];
allStars.push(star1, star2, star3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
