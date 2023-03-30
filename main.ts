input.onPinPressed(TouchPin.P0, function () {
    basic.showString("remember!")
    Arrow_1_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_2_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_3_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_4_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_5_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_6_P0 = PO_arrows_wrong_answer_1._pickRandom()
    Arrow_1_P0.showImage(0, Intervel_time)
    Arrow_2_P0.showImage(0, Intervel_time)
    Arrow_3_P0.showImage(0, Intervel_time)
    Arrow_4_P0.showImage(0, Intervel_time)
    Arrow_5_P0.showImage(0, Intervel_time)
    Arrow_6_P0.showImage(0, Intervel_time)
    basic.showNumber(1)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    PO_arrows_wrong_answer_1._pickRandom().showImage(0, Intervel_time)
    _1 = 0
    basic.showNumber(2)
    Arrow_1_P0.showImage(0, Intervel_time)
    Arrow_2_P0.showImage(0, Intervel_time)
    Arrow_3_P0.showImage(0, Intervel_time)
    Arrow_4_P0.showImage(0, Intervel_time)
    Arrow_5_P0.showImage(0, Intervel_time)
    Arrow_6_P0.showImage(0, Intervel_time)
    basic.showNumber(3)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    P0_arrows_wrong_answer_2._pickRandom().showImage(0, Intervel_time)
    basic.showString("1:A 2:B 3:A+B")
})
let P0_north_west: Image = null
let P0_south_west: Image = null
let P0_south_east: Image = null
let P0_north_east: Image = null
let P0_west: Image = null
let P0_east: Image = null
let P0_south: Image = null
let P0_arrows_north: Image = null
let interval_time_pre: number[] = []
let P0_arrows_wrong_answer_2: Image[] = []
let Intervel_time = 0
let Arrow_6_P0: Image = null
let Arrow_5_P0: Image = null
let Arrow_4_P0: Image = null
let Arrow_3_P0: Image = null
let Arrow_2_P0: Image = null
let PO_arrows_wrong_answer_1: Image[] = []
let Arrow_1_P0: Image = null
let Right_responces: string[] = []
let wrong_responces: string[] = []
let _1 = 0
if (input.buttonIsPressed(Button.A)) {
    basic.showString("" + (wrong_responces))
    basic.showIcon(IconNames.Sad)
} else if (input.buttonIsPressed(Button.B)) {
    basic.showString("" + (Right_responces))
    basic.showIcon(IconNames.Happy)
} else if (input.buttonIsPressed(Button.AB)) {
    basic.showString("" + (wrong_responces))
    basic.showIcon(IconNames.Sad)
} else {
	
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        interval_time_pre = [
        1000,
        1000,
        700,
        400,
        600,
        500,
        700,
        800,
        300,
        800,
        900
        ]
        Intervel_time = interval_time_pre._pickRandom()
    }
})
basic.forever(function () {
    P0_arrows_north = images.arrowImage(ArrowNames.North)
    P0_south = images.arrowImage(ArrowNames.South)
    P0_east = images.arrowImage(ArrowNames.East)
    P0_west = images.arrowImage(ArrowNames.West)
    P0_north_east = images.arrowImage(ArrowNames.NorthEast)
    P0_south_east = images.arrowImage(ArrowNames.SouthEast)
    P0_south_west = images.arrowImage(ArrowNames.SouthWest)
    P0_north_west = images.arrowImage(ArrowNames.NorthWest)
    PO_arrows_wrong_answer_1 = [
    P0_arrows_north,
    P0_east,
    P0_south,
    P0_west,
    P0_north_east,
    P0_north_west,
    P0_south_east,
    P0_south_west
    ]
})
basic.forever(function () {
    P0_arrows_north = images.arrowImage(ArrowNames.North)
    P0_south = images.arrowImage(ArrowNames.South)
    P0_east = images.arrowImage(ArrowNames.East)
    P0_west = images.arrowImage(ArrowNames.West)
    P0_north_east = images.arrowImage(ArrowNames.NorthEast)
    P0_south_east = images.arrowImage(ArrowNames.SouthEast)
    P0_south_west = images.arrowImage(ArrowNames.SouthWest)
    P0_north_west = images.arrowImage(ArrowNames.NorthWest)
    P0_arrows_wrong_answer_2 = [
    P0_arrows_north,
    P0_east,
    P0_south,
    P0_west,
    P0_north_east,
    P0_north_west,
    P0_south_east,
    P0_south_west
    ]
})
basic.forever(function () {
    wrong_responces = [
    "Nope",
    "Try again",
    "Nice try!",
    "Wrong!",
    "Almost!",
    "Faux avis!",
    "Wrong guess"
    ]
    Right_responces = [
    "Good memory",
    "You right!",
    "Good job",
    "Yay!!",
    "Right!!",
    "Yup!"
    ]
})
