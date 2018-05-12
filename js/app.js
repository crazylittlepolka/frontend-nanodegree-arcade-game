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
    collisionDetector(){};
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update = function(dt) {
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

// Now instantiate your objects.

let enemy1 = new Enemy(-100, 60, 100);
let enemy2 = new Enemy(0, 143, 50);
let enemy3 = new Enemy(-100, 226, 80);

// Place all enemy objects in an array called allEnemies

const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);


// Place the player object in a variable called player
let player = new Player(205, 400);

//collision detector from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

Player.prototype.collisionDetector= function(){
  for(let i = 0;i< allEnemies.length; i++){
  if(this.x < allEnemies[i].x + allEnemies[i].width &&
   this.x + player.width > allEnemies[i].x &&
   this.y < allEnemies[i].y + allEnemies[i].height &&
   this.height + this.y > allEnemies[i].y){
     alert('ups');
   }
  }
}


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
