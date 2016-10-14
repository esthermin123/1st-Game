/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var platforms;
var platform1;
var player;
var cursors;
var diamonds;
var score;
score = 0;
var scoreText;


function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('side', 'assets/platform.1.png');
    game.load.image('diamond', 'assets/diamond.png', 20, 18);
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}
game.physics.startSystem(Phaser.Physics.ARCADE);

function create() {
    game.add.sprite(0, 0, 'sky');
    platform1 = game.add.group();
    platform1.enableBody = true;
    var side = platform1.create(0, game.world.height - 64, 'side');
    side.scale.setTo(2, 2);
    side.body.immovable = true;
    var sideground = platform1.create(595, 1, 'side');
    sideground.body.immovable = true;
    var sideground = platform1.create(735, 1, 'side');
    sideground.body.immovable = true;
    var sideground = platform1.create(175, 1, 'side');
    sideground.body.immovable = true;
    var sideground = platform1.create(35, 1, 'side');
    sideground.body.immovable = true;
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(50, 45, 'ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(610, 45, 'ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(21, 210, 'ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(210, 300, 'ground');
    ledge.body.immovable = false;
    var ledge = platforms.create(270, 453, 'ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(460, 370, 'ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(640, 280, 'ground');
    ledge.body.immovable = true;
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0;
    player.body.gravity.y = 150;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    cursors = game.input.keyboard.createCursorKeys();
    diamonds = game.add.group();
    diamonds.enableBody = true;
    for(var i = 0; i < 12; i++)
    {
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
        var diamond = diamonds.create(i * 70, 0, 'diamond');
        diamond.body.gravity.y = 6;
        diamond.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    scoreText = game.add.text(620, 550, 'Score: 0', { fontSize: '32px', fill: '#000' });


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
        player.frame = 4;
    }
    if(cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -350;
    }
    game.physics.arcade.collide(diamonds, platforms);
    game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);
}

function collectDiamond(player, diamond) {
    diamond.kill();
    score += 1;
    scoreText.text = "Score: " + score; + "Score: ";
}