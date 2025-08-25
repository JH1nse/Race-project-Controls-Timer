input.onButtonPressed(Button.A, function () {
    CutebotPro.fullAstern()
    basic.showArrow(ArrowNames.South)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    serial.writeLine("Checkpoint Test: " + ("behaald in " + Min + " minuten en " + ("" + Sec + " seconden.")))
    if (Sec <= 3) {
        serial.writeLine("Valsspeler.")
        Min = 9999999
    }
})
input.onButtonPressed(Button.B, function () {
    CutebotPro.fullSpeedAhead()
    basic.showArrow(ArrowNames.North)
})
let Sec = 0
let Min = 0
Min = 0
Sec = 0
CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
basic.forever(function () {
    serial.writeValue("Secondes", Sec)
    serial.writeValue("Minuten", Min)
    basic.pause(1000)
})
basic.forever(function () {
    basic.pause(1000)
    Sec += 1
})
basic.forever(function () {
    if (Sec == 60) {
        Sec = 0
        Min += 1
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        CutebotPro.pwmCruiseControl(50, 100)
        basic.showArrow(ArrowNames.West)
    } else if (input.isGesture(Gesture.TiltRight)) {
        CutebotPro.pwmCruiseControl(100, 50)
        basic.showArrow(ArrowNames.East)
    } else if (input.isGesture(Gesture.LogoUp)) {
        CutebotPro.pwmCruiseControl(100, 100)
        basic.showArrow(ArrowNames.North)
    } else {
        CutebotPro.pwmCruiseControl(100, 100)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
