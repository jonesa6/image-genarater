def on_a_pressed():
    random_shape()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def random_shape():
    global cycle_count, cx, cy, grow, circle, circleSprite, d, x, y, radius
    cycle_count = game.ask_for_number("amount of cycles")
    cx = 64
    cy = 64
    grow = True
    circle = image.create(128, 128)
    circle.fill(15)
    circleSprite = sprites.create(circle, 0)
    for index in range(cycle_count):
        circle.fill(0)
        d = 3 - randint(0, 3) * radius
        x = 0
        y = radius
        while x <= y:
            circle.set_pixel(cx + x, cy + y, randint(2, 4))
            circle.set_pixel(cx + x, cx - y, 4)
            circle.set_pixel(cx - x, cx + y, 9)
            circle.set_pixel(cx - x, cy - y, 9)
            circle.set_pixel(cx + y, cy + x, randint(4, 6))
            circle.set_pixel(cx + y, cy - x, 4)
            circle.set_pixel(cx - y, cy + x, 1)
            circle.set_pixel(cx - y, cy - x, randint(1, 3))
            if d <= 0:
                d += 4 * x + 6
            else:
                y += -1
                d += 4 * (x - y) + 10
            x += randint(-1, 1)
        if grow:
            radius += 1
        else:
            radius += 0 - 1
        if radius > 64:
            grow = False
        elif radius < 1:
            grow = True
        pause(2)
y = 0
x = 0
radius = 0
d = 0
circleSprite: Sprite = None
circle: Image = None
grow = False
cy = 0
cx = 0
cycle_count = 0
game.show_long_text("welcome to random shape generater this is a  game where it whill generate shapes. you will get asked how many cycles? this is how many times it will generate a new frame. A will restart the game.",
    DialogLayout.FULL)
random_shape()