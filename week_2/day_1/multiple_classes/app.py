from modules.car import *
from modules.engine import *
from modules.gearbox import *


engine = Engine(2)
gearbox = Gearbox(6)


car = Car("red","ford",engine,gearbox)

print(car.colour)
print(car.engine.volume)
print(car.engine.ignite())