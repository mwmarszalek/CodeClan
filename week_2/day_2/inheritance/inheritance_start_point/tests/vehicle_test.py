import unittest

from classes.vehicle import Vehicle

class TestVehicle(unittest.TestCase):

    def setUp(self):
        self.vehicle = Vehicle()

    def test_vehicle_can_start_engine(self):
        self.assertEqual("Vrrmmm", self.vehicle.start_engine())
