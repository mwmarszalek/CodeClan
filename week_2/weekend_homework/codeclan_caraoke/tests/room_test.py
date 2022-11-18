import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room
from classes.bar_tab import Bar_tab


class TestRoom(unittest.TestCase):
    
    def setUp(self):
        self.room = Room(500)
        self.song = Song("Paint It Black")
        self.guest1 = Guest("Daria",200,"Aisatana")
        self.guest2 = Guest("Eve",150,"Vordhosbn")
        self.guest3 = Guest("John",100,"Windowlicker")
        self.fee = 20
        
    def test_add_guest_to_room(self):
        self.room.add_guest(self.guest1)
        self.assertEqual(1,self.room.guest_count())
        
    def test_add_song_to_room(self):
        self.room.add_song(self.song)
        self.assertEqual(1,self.room.songs_count())
        
    def test_remove_song_from_room(self):
        self.room.remove_song(self.song)
        self.assertEqual(0,self.room.songs_count())
        
    def test_remove_guest_from_room(self):
        self.room.remove_guest(self.guest1)
        self.assertEqual(0,self.room.guest_count())
        
    def test_cant_add_guest_at_capacity_3(self):
        self.room.add_guest(self.guest1)
        self.room.add_guest(self.guest2)
        self.room.add_guest(self.guest3)
        self.assertEqual("You Shall Not Pass",self.room.max_capacity())
        
    def test_paying_for_entry(self):
        self.room.pay_for_entry(self.guest1,self.fee)
        self.room.add_guest(self.guest1)
        self.assertEqual(180,self.guest1.wallet)
        self.assertEqual(520,self.room.till)
        
        
        
        
        

        
    