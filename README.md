# Lesson 2

## Steps

1. __Blank screen:__
    (`var game = new Phaser.Game(600, 480);`)
1. __Create `GameState` object to hold template methods__ - init, preload, create, update
1. __add GameState to game__ (`game.state.add`)
1. __start GameState__ (`game.state.start`)
1. __load spritesheet in preload__ (`this.load.spritesheet('sheetname', 'location', width, height, # of frames)`)
1. __add girl as sprite in create__ (`this.girl = this.add.sprite(x, y, 'sheetname')`)
1. __show single frame of girl in update__
1. __add animation cells in create__ (`this.girl.animations.add('walk', [frame1, frame2], frames per second, true)`)
1. __make girl walk in update__ (`this.girl.animations.play('walk')`)