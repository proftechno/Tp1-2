basic.showIcon(IconNames.Happy)
basic.pause(3000)
basic.showIcon(IconNames.Sad)
basic.pause(3000)
basic.clearScreen()
basic.forever(function () {
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
