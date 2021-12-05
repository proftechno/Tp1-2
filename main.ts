input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 8; index++) {
        basic.showNumber(8)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
