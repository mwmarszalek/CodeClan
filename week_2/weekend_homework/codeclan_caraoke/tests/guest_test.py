import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room


class TestGuest(unittest.TestCase):
    
    def setUp(self):
        
        self.guest = Guest("Daria",150,"Aisatana")
        self.room = Room(500,[],"Aisatana")
        self.song = Song("Aisatana")
        
        
        
    def test_guest_customer_has_name(self):
        self.assertEqual("Daria",self.guest.guest_name)
        
    def test_check_fav_song(self):
        self.room.add_song(self.song)
        self.guest.check_fav_song(self.room.songs)
        self.assertEqual("Woohoo",self.guest.check_fav_song(self.room.songs))
        



