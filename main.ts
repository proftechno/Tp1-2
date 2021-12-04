input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 8; index++) {
        basic.showNumber(8)
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(2000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
