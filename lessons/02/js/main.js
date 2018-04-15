var game = new Phaser.Game(600, 480);

var GameState = {
    init: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.direction = "stop";
    },

    preload: function(){
        this.load.spritesheet('girlSheet', 'assets/lesson01/sprite-single-row.png', 46, 48);
    },

    create: function(){
        this.girl = this.add.sprite(300, 200, 'girlSheet');
        this.girl.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.girl);
        this.walk = this.girl.animations.add('walk', [0, 1, 2, 3, 4], 8, true);
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
            this.girl.body.velocity.x = -100;
            this.girl.scale.setTo(1, 1);

            this.girl.animations.play('walk');

        } else if (this.direction == "right") {
            this.girl.body.velocity.x = 100;
            this.girl.scale.setTo(-1, 1);
            this.girl.animations.play('walk');
        } else if (this.direction == "stop") {
            this.girl.body.velocity.x = 0;
            this.girl.frame = 5;
        }
    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');