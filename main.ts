let Temperatur = 0
let Kalibrierungswert = 0
let CO2 = 0
let Luftfeuchtigkeit = 0
SCD30.setCalibration400ppm()
OLED12864_I2C.init(60)
OLED12864_I2C.on()
OLED12864_I2C.zoom(true)
OLED12864_I2C.clear()
let SensorVersion = SCD30.getVersion()
basic.forever(function () {
    Kalibrierungswert = SCD30.getCalibration()
    CO2 = SCD30.readCO2()
    Temperatur = SCD30.readTemperature()
    Luftfeuchtigkeit = SCD30.readHumidity()
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    0,
    "Kal : " + Kalibrierungswert.toString(),
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "CO2 : " + CO2.toString(),
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "Temp: " + Temperatur.toString(),
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "Luft: " + Luftfeuchtigkeit.toString(),
    1
    )
    basic.pause(10000)
})
