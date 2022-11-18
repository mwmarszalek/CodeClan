import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room


class TestGuest(unittest.TestCase):
    
    def setUp(self):
        
        self.guest = Guest("Daria",150)
        
        
        
    def test_guest_customer_has_name(self):
        self.assertEqual("Daria",self.guest.guest_name)


