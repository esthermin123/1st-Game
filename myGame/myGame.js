/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var platforms;
var platform1;
var platform2;
var player;
var cursors;
var stars;
var score;
score = 0;
var scoreText;


function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('you win', 'assets/youwin.png');
    game.load.image('ground', 'assets/platform.3.jpg');
    game.load.image('mini ground', 'assets/platform.2.jpg');
    game.load.image('side', 'assets/platform.1.jpg');
    game.load.image('tiny ground', 'assets/platform.4.jpg');
    game.load.image('star', 'assets/shinystar.png', 32, 28);
    game.load.spritesheet('mushroom', 'assets/mushroom.png', 46, 28);
}
game.physics.startSystem(Phaser.Physics.ARCADE);

function create() {
    game.add.sprite(0, 0, 'sky');
    platform1 = game.add.group();
    platform1.enableBody = true;
    var side = platform1.create(0, game.world.height - 64, 'side');
    side.scale.setTo(2, 2);
    side.body.immovable = true;
    var sideground = platform1.create(734, -21, 'side');
    sideground.body.immovable = true;
    var sideground = platform1.create(46, -21, 'side');
    sideground.body.immovable = true;
    platform2 = game.add.group();
    platform2.enableBody = true;
    var side2 = platform2.create(0, game.world.height - 64, 'side');
    side2.scale.setTo(2, 2);
    side2.body.immovable = true;
    var side2ground = platform2.create(610, -21, 'side');
    side2ground.body.immovable = true;
    var side2ground = platform2.create(174, -21, 'side');
    side2ground.body.immovable = true;
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(1, game.world.height - 60, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(53, 30, 'mini ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(614, 30, 'mini ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(55, 210, 'mini ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(200, 350, 'mini ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(300, 453, 'tiny ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(490, 370, 'tiny ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(690, 280, 'tiny ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(490, 560, 'mini ground');
    ledge.body.immovable = false;
    player = game.add.sprite(40, game.world.height - 150, 'mushroom');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0;
    player.body.gravity.y = 150;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1], 1, true);
    player.animations.add('right', [3, 4], 1, true);
    cursors = game.input.keyboard.createCursorKeys();
    stars = game.add.group();
    stars.enableBody = true;
    for(var i = 0; i < 12; i++)
    {
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 12;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(650, 560, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    player.body.velocity.x = 0;
    if(cursors.left.isDown)
    {
        player.body.velocity.x = -150;
        player.animations.play('left');

    }
    else if(cursors.right.isDown)
    {
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    else
    {
        player.animations.stop();
        player.frame = 2;
    }
    if(cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -350;
    }
    var hitSide = game.physics.arcade.collide(player, platform1);
    player.body.velocity.x = 0;
    if(cursors.left.isDown)
    {
        player.body.velocity.x = -150;
        player.animations.play('left');

    }
    else if(cursors.right.isDown)
    {
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    else
    {
        player.animations.stop();
        player.frame = 2;
    }
    if(cursors.up.isDown && player.body.touching.down && hitSide)
    {
        player.body.velocity.y = -350;
    }
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    if(score >= 359)
    game.add.image(0, 0, 'you win');
}

function collectStar(player, star) {
    star.kill();
    score += 1;
    scoreText.text = "Score: " + score; + "Score: ";
}