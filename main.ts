controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    random_shape()
})
function random_shape() {
    
    cycle_count = game.askForNumber("amount of cycles")
    cx = 64
    cy = 64
    grow = true
    circle = image.create(128, 128)
    circle.fill(15)
    circleSprite = sprites.create(circle, 0)
    for (let index = 0; index < cycle_count; index++) {
        circle.fill(0)
        d = 3 - randint(0, 3) * radius
        x = 0
        y = radius
        while (x <= y) {
            circle.setPixel(cx + x, cy + y, randint(2, 4))
            circle.setPixel(cx + x, cx - y, 4)
            circle.setPixel(cx - x, cx + y, 9)
            circle.setPixel(cx - x, cy - y, 9)
            circle.setPixel(cx + y, cy + x, randint(4, 6))
            circle.setPixel(cx + y, cy - x, 4)
            circle.setPixel(cx - y, cy + x, 1)
            circle.setPixel(cx - y, cy - x, randint(1, 3))
            if (d <= 0) {
                d += 4 * x + 6
            } else {
                y += -1
                d += 4 * (x - y) + 10
            }
            
            x += randint(-1, 1)
        }
        if (grow) {
            radius += 1
        } else {
            radius += 0 - 1
        }
        
        if (radius > 64) {
            grow = false
        } else if (radius < 1) {
            grow = true
        }
        
        pause(2)
    }
}

let y = 0
let x = 0
let radius = 0
let d = 0
let circleSprite : Sprite = null
let circle : Image = null
let grow = false
let cy = 0
let cx = 0
let cycle_count = 0
game.showLongText("welcome to random shape generater this is a  game where it whill generate shapes. you will get asked how many cycles? this is how many times it will generate a new frame. A will restart the game.", DialogLayout.Full)
random_shape()
