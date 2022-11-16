import unittest
from src.pub import Pub
from src.customer import Customer
from src.drink import Drink

class TestPub(unittest.TestCase):
    
    
    def setUp(self):
        self.pub = Pub("Heaven",450.00,["Malibu","Whiskey"])
        self.customer = Customer("John",200.00,19,11)
        self.drink = Drink('Bloody Mary',20,0.5)
        
        
    def test_pub_has_name(self):
        self.assertEqual("Heaven",self.pub.name)
    
    def test_sell_drink(self):
        
        self.pub.sell_drink(self.drink,self.customer)
        self.assertEqual(470.00,self.pub.till)
        self.assertEqual(180.00,self.customer.wallet)
        
    def test_check_age(self): 
        
        result = self.pub.check_age(self.customer)
        self.assertEqual(True,result)
        
   
    def test_refuse_to_sell(self): 
        
        result = self.pub.refuse_to_sell(self.customer)
        self.assertEqual(True,result)
        