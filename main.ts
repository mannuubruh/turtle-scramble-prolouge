namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const Extra = SpriteKind.create()
    export const Lives = SpriteKind.create()
    export const Berry = SpriteKind.create()
    export const Edible = SpriteKind.create()
}
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    scene.followPath(sprite, scene.aStar(tiles.locationOfSprite(sprite), tiles.locationOfSprite(Render.getRenderSpriteVariable())), 50)
})
game.splash("Sigh...")
game.splash("Why are we here again?")
game.splash("Jarald...")
game.splash("I told you already!")
game.splash("we bury our egg at night")
game.splash("So the crabs don't get us")
game.splash("Sigh...Go on!")
let mySprite = sprites.create(img`
    2 2 2 . 2 . 2 . 2 2 2 . 2 2 2 . 
    2 . 2 . 2 . 2 . . 2 . . . 2 . . 
    2 2 2 . 2 . 2 . . 2 . . . 2 . . 
    2 . . . 2 . 2 . . 2 . . . 2 . . 
    2 . . . 2 2 2 . . 2 . . . 2 . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 . 2 2 2 2 . . 2 2 2 2 . . 
    2 . . . 2 . . . . . 2 . . . . . 
    2 2 2 . 2 . 2 2 2 . 2 . 2 2 2 . 
    2 . . . 2 . . 2 . . 2 . . 2 . . 
    2 2 2 . 2 2 2 2 . . 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    `, SpriteKind.Text)
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
    `, SpriteKind.Player)
let purple_tile = sprites.create(img`
    . . c c . . . . c c . . 
    . b 2 2 c . . c 2 2 b . 
    . f 1 2 c . . c 2 1 f . 
    . f 1 2 c . . c 2 1 f . 
    . b 2 2 4 c c 4 2 2 b . 
    . . b 2 2 4 4 2 2 b . . 
    . c c 2 2 2 2 2 2 c c . 
    c 2 2 4 2 2 2 2 4 2 2 c 
    b 2 4 b 4 4 4 4 b 4 2 b 
    c 4 2 2 b 4 4 b 2 2 4 c 
    c 2 2 2 c 4 4 c 2 2 2 c 
    c 2 2 2 2 c c 2 2 2 2 c 
    . c c c c c c c c c c . 
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnRandomTile(purple_tile, assets.tile`myTile18`)
tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), assets.tile`myTile15`)
tiles.placeOnRandomTile(Mrsturtle, assets.tile`myTile13`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
Mrsturtle.sayText("BEHIND YOU!!")
for (let value4 of tiles.getTilesByType(assets.tile`myTile18`)) {
    tiles.placeOnTile(purple_tile, value4)
    scene.followPath(purple_tile, scene.aStar(tiles.locationOfSprite(purple_tile), tiles.locationOfSprite(Render.getRenderSpriteVariable())), 50)
}
game.onUpdate(function () {
    if (Render.getRenderSpriteVariable().overlapsWith(purple_tile)) {
        game.setGameOverMessage(false, "SCRAMBLED!!!")
        game.setGameOverEffect(false, effects.dissolve)
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (Render.getRenderSpriteVariable().overlapsWith(mySprite)) {
        game.setGameOverMessage(true, "Barely Made It!!")
        game.setGameOverEffect(true, effects.bubbles)
        game.gameOver(true)
    }
})
