import unittest
from src.drink import Drink

class TestDrink(unittest.TestCase):
    
    
    def setUp(self):
        self.drink = Drink("Bloody Mary",20.00,0.5)
        
    def test_drink_has_name(self):
        self.assertEqual("Bloody Mary",self.drink.name)
        
    