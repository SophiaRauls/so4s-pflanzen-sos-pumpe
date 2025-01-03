let Temperatur = 0
let Feuchte = 0
let Wasser = 0
for (let index = 0; index < 2; index++) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(750)
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(750)
}
basic.forever(function () {
    Feuchte = pins.analogReadPin(AnalogPin.P0)
    Temperatur = pins.analogReadPin(AnalogPin.C16)
    if (Feuchte > 550) {
        images.iconImage(IconNames.Chessboard).showImage(0)
        Wasser = 1
    } else {
        if (Feuchte < 350) {
            images.iconImage(IconNames.No).showImage(0)
            Wasser = 0
        } else {
            images.iconImage(IconNames.Happy).showImage(0)
            Wasser = 0
        }
    }
    if (Temperatur > 450) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (Temperatur < 415) {
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P2, 45)
    }
    basic.pause(500)
})
basic.forever(function () {
    if (Wasser == 0) {
        motors.motorPower(0)
        basic.turnRgbLedOff()
    } else if (Wasser == 1) {
        motors.motorPower(80)
        basic.setLedColor(0x00ffff)
        basic.pause(1100)
        motors.motorPower(69)
        basic.pause(8900)
        motors.motorPower(0)
        basic.turnRgbLedOff()
        basic.pause(50000)
    } else {
        motors.motorPower(0)
        basic.turnRgbLedOff()
    }
})
