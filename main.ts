enum RadioMessage {
    StartTijd = 340,
    Finish = 5694,
    Checkpoint3Behaald = 11045,
    rechtdoor = 12848,
    Checkpoint4Behaald = 14638,
    Checkpoint2Behaald = 24361,
    Checkpoint1 = 25201,
    links = 30556,
    Checkpoint2 = 32327,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Checkpoint4 = 53120,
    Start = 56380,
    Checkpoint1Behaald = 56413,
    rem = 58635,
    Checkpoint3 = 63779
}
/**
 * de controls met wat het doet en met een pijl die de actie weergeeft.
 */
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.achteruit)
    basic.showArrow(ArrowNames.South)
})
// toeter
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.rechtdoor)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendMessage(RadioMessage.rechts)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.rem)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.vooruit)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendMessage(RadioMessage.links)
    basic.showArrow(ArrowNames.West)
})
// radio configureren
radio.setTransmitPower(7)
radio.setGroup(35)
