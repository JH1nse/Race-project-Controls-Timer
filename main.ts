enum RadioMessage {
    StartTijd = 340,
    Finish = 5694,
    rechtdoor = 12848,
    Checkpoint1 = 25201,
    links = 30556,
    Checkpoint2 = 32327,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Checkpoint4 = 53120,
    Start = 56380,
    rem = 58635,
    Checkpoint3 = 63779
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.achteruit)
    basic.showArrow(ArrowNames.South)
})
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
radio.onReceivedMessage(RadioMessage.StartTijd, function () {
    while (true) {
        serial.writeValue("Secondes", Sec)
        serial.writeValue("Minuten", Min)
        basic.pause(1000)
        Sec += 1
    }
})
let Min = 0
let Sec = 0
radio.setTransmitPower(7)
radio.setGroup(35)
basic.forever(function () {
    if (Sec == 60) {
        Sec = 0
        Min += 1
    }
})
