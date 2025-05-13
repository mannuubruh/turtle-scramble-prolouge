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
tiles.setCurrentTilemap(tilemap`level6`)
tiles.placeOnRandomTile(Render.getRenderSpriteInstance(), assets.tile`myTile15`)
tiles.placeOnRandomTile(Mrsturtle, assets.tile`myTile13`)
Mrsturtle.sayText("Go on! The land is right over there.")
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
