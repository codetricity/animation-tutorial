## What We're Building

https://codetricity.github.io/animation-tutorial/

## Steps

1. Blank screen
    `var game = new Phaser.Game(600, 480);`
1. Create `GameState` object to hold template methods - init, preload, create, update
1. add GameState to game (`game.state.add`)
1. start GameState (`game.state.start`)
1. load spritesheet in preload
1. add girl as sprite in create
1. show single frame of girl in update
1. add animation cells in create
1. make girl walk in update