input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x0000ff)
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0xff0000)
})
basic.setLedColor(0xff0000)
music.playTone(262, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(349, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(349, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(349, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(392, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(440, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(440, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(440, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(440, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(392, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(440, music.beat(BeatFraction.Quarter))
basic.pause(250)
music.playTone(466, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(330, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(392, music.beat(BeatFraction.Half))
basic.pause(250)
music.playTone(349, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
