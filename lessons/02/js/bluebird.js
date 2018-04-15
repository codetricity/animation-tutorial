var game = new Phaser.Game(600, 480);

var GameState = {
    init: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.direction = "stop";
        this.speed = 200;
    },

    preload: function(){
        this.load.spritesheet('birdSheet', 'assets/02_bird_75x50x8.png', 75, 50);
    },

    create: function(){
        this.bird = this.add.sprite(300, 200, 'birdSheet');
 
        this.bird.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.bird);
        this.walk = this.bird.animations.add('walk',[0, 1, 2, 3, 4, 5, 6, 7], 20, true);
    },

    update: function(){

        if(this.cursors.right.isDown){
            this.direction = "right";
            console.log("direction is right");
        } else if (this.cursors.left.isDown) {
            this.direction = "left";
            console.log("direction is left");
        } else {
            this.direction = "stop";
        }

        if (this.direction == "left") {
            this.bird.body.velocity.x = -this.speed;
            this.bird.scale.setTo(-1, 1);



            this.bird.animations.play('walk');

        } else if (this.direction == "right") {
            this.bird.body.velocity.x = this.speed;
            this.bird.scale.setTo(1, 1);
            this.bird.animations.play('walk');
        } else if (this.direction == "stop") {
            this.bird.body.velocity.x = 0;
            this.bird.frame = 5;
        }
    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');