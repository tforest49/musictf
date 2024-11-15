input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.TShirt)
})
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        led.plotBrightness(2, 3, 255)
    }
})
