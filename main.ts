let Wasser = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.C17) > 550) {
        images.iconImage(IconNames.Chessboard).showImage(0)
        Wasser = 1
    } else {
        if (pins.analogReadPin(AnalogPin.C17) < 350) {
            images.iconImage(IconNames.No).showImage(0)
            Wasser = 0
        } else {
            images.iconImage(IconNames.Happy).showImage(0)
            Wasser = 0
        }
    }
    if (pins.analogReadPin(AnalogPin.C16) > 450) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (pins.analogReadPin(AnalogPin.C16) < 415) {
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P2, 45)
    }
    basic.pause(500)
})
basic.forever(function () {
    if (Wasser == 0) {
        motors.motorPower(0)
    } else if (Wasser == 1) {
        motors.motorPower(100)
        basic.pause(10000)
        motors.motorPower(0)
        basic.pause(50000)
    } else {
        motors.motorPower(0)
    }
})
