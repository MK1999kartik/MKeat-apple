sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Apple.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
let Apple: Sprite = null
scene.setBackgroundColor(9)
Apple = sprites.create(img`
    ....ffffffffffffffffff....
    ..ffffffffffffffffffffff..
    .ffffffffffffffffffffffff.
    .ffffffffffffffffffffffff.
    .ffffffffffffffffffffffff.
    .ffffffffffffddddddffffff.
    fffffffffffffddddddfffffff
    fffffffffffffddddddddfffff
    fffffddddddddddddddddddddf
    fffffddddddddddddddddddddf
    ffdddddddddddddddddddddddf
    fd11fddddddffffddddddf11df
    fd11fddddddffffddddddf11df
    fd11fdddddffffffdddddf11df
    fdddddddddfeeeefdddddddddf
    fdddddddddfeeeefdddddddddf
    fddddddddddddddddddddddddf
    fddddddffffffffffffddddddf
    fddddddffffffffffffddddddf
    .fdddddf11522dd255fdddddf.
    .fdddddf22222222ddfdddddf.
    .fdddddf22222222ddfdddddf.
    ..ffdddf2225522222fdddff..
    ....ffff55211dd2ddffff....
    ......ffffffffffffff......
    `, SpriteKind.Player)
controller.moveSprite(Apple)
Apple = sprites.create(img`
    .........ec77.......
    .....eeeec777ee.....
    ..ceeeeeec7ee22eee..
    .ceeeeeeec6eee2222e.
    .ceeee2eecc2245442e.
    .ceeee2eecc2245442e.
    ceeee22222222455522e
    cee2222222222244422e
    cee2222222222222222e
    cee2222222222222222e
    cee2222222222222222e
    cee2222222222222222e
    cee2222222222222222e
    cee2222222222222242e
    .eeee2222222222224e.
    .2eee2222222222442e.
    .2eee2222222222442e.
    ..2eee22222224422e..
    ...222eee44442eee...
    ......222eeeee......
    `, SpriteKind.Food)
