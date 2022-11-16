import unittest
from src.customer import Customer
from src.pub import Pub
from src.drink import Drink

class TestCustomer(unittest.TestCase):
    
    
    def setUp(self):
        self.customer = Customer("John",200.00,19,10)
        self.drink = Drink("Bloody Mary",20.00,0.5)
        
        
    def test_customer_has_name(self):
        self.assertEqual("John",self.customer.name)
        
    def test_increase_drunkness(self):
        self.customer.increase_drunkness(self.drink)
        self.assertEqual(10.5,self.customer.drunkeness)
        
 
    
            
        
  
        
    
    
        
        