let Wasser = 0
let Temparatur = 0
let Feuchte = 0
basic.forever(function () {
    if (Wasser == 0) {
        motors.motorPower(0)
        basic.setLedColor(0x000000)
    } else if (Wasser == 1) {
        motors.motorPower(100)
        basic.setLedColor(0x00ffff)
        basic.pause(10000)
        motors.motorPower(0)
        basic.setLedColor(0x000000)
        basic.pause(50000)
    } else {
        motors.motorPower(0)
        basic.setLedColor(0x000000)
    }
})
basic.forever(function () {
    Temparatur = pins.analogReadPin(AnalogPin.C16)
    Feuchte = pins.analogReadPin(AnalogPin.C17)
    basic.showNumber(Feuchte)
    if (Feuchte > 550) {
        basic.showIcon(IconNames.Chessboard)
        Wasser = 1
    } else {
        if (Feuchte < 350) {
            basic.showIcon(IconNames.No)
            Wasser = 0
        } else {
            basic.showIcon(IconNames.Happy)
            Wasser = 0
        }
    }
    if (Temparatur > 450) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (Temparatur < 415) {
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P2, 45)
    }
    basic.pause(500)
})
