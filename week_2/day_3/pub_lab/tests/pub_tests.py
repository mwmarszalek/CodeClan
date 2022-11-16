import unittest
from src.pub import Pub

class TestPub(unittest.TestCase):
    
    
    def setUp(self):
        self.pub = Pub("The Prancing Pony",100.00)
        
    
    def test_pub_has_name(self):
        self.assertEqual("The Prancing Pony",self.pub.name)
        
    
    def test_increase_till(self):
        self.pub.increase_till(2.50)
        self.assertEqual(102.50,self.pub.till)
        
    
    
    