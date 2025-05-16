namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const tile = SpriteKind.create()
}
game.splash("Sigh...")
game.splash("Why are we here again?")
game.splash("Jarald...")
game.splash("I told you already!")
game.splash("we bury our egg at night")
game.splash("So the crabs don't get us")
game.splash("Sigh...Go on!")
let Mrsturtle = sprites.create(img`
    . . . 3 . 
    . 7 7 7 3 
    . a 7 a . 
    . 7 3 7 . 
    7 4 4 4 7 
    7 e e e 7 
    7 4 4 4 7 
    . 7 . 7 . 
    . 7 . 7 . 
    `, SpriteKind.NPC)
let purple_tile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c . . . . c c . . . . 
    . . . b 2 2 c . . c 2 2 b . . . 
    . . . f 1 2 c . . c 2 1 f . . . 
    . . . f 1 2 c . . c 2 1 f . . . 
    . . . b 2 2 4 c c 4 2 2 b . . . 
    . . . . b 2 2 4 4 2 2 b . . . . 
    . . . c c 2 2 2 2 2 2 c c . . . 
    . . c 2 2 4 2 2 2 2 4 2 2 c . . 
    . . b 2 4 b 4 4 4 4 b 4 2 b . . 
    . . c 4 2 2 b 4 4 b 2 2 4 c . . 
    . . c 2 2 2 c 4 4 c 2 2 2 c . . 
    . . c 2 2 2 2 c c 2 2 2 2 c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level6`)
tiles.placeOnRandomTile(purple_tile, assets.tile`myTile18`)
tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), assets.tile`myTile15`)
tiles.placeOnRandomTile(Mrsturtle, assets.tile`myTile13`)
Mrsturtle.sayText("Go on! The land is right over there.")
game.onUpdate(function () {
    if (Render.getRenderSpriteVariable().overlapsWith(purple_tile)) {
        game.setGameOverMessage(false, "GAME OVER!")
        game.gameOver(false)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(Render.getRenderSpriteVariable(), purple_tile) < 0) {
        purple_tile.follow(Render.getRenderSpriteVariable(), 100)
    } else {
        purple_tile.follow(Render.getRenderSpriteVariable(), 60)
    }
})
