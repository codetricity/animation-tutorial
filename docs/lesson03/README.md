# Lesson 3 - Keyboard Control and Physics for Movement

## Steps

1. enable Phaser game physics in `init`. `this.game.physics.startSystem(Phaser.Physics.ARCADE);`
1. create cursors in `init` method. `this.cursors = this.game.input.keyboard.createCursorKeys();`
1. enable physics on player in `create`. `this.game.physics.arcade.enable(this.girl);`
1. set anchor point of player to center. `this.girl.anchor.setTo(0.5);`
1. in `update` check for cursor is down with `if` statement. -    `if(this.cursors.right.isDown){}
1. change player velocity based on directory.  `this.girl.body.velocity.x = -100;`
1. use negative scale if you need to flip direction of sprites. ` this.girl.scale.setTo(-1, 1);`
1. if player is stopped, set to front view. - `this.girl.frame = 5;`

## Additional

Enable movement in all four directions.