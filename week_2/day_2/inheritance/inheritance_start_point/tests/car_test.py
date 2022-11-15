import unittest

from classes.car import Car

class TestCar(unittest.TestCase):

    def setUp(self):
        self.car = Car()

    def test_car_can_start_engine(self):
        self.assertEqual("Vrrmmm", self.car.start_engine())
