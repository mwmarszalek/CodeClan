import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room


class TestSong(unittest.TestCase):
    
    
    def setUp(self):
        
        self.song = Song("Paint It Black")
        
        
        
    def test_song_customer_has_name(self):
        self.assertEqual("Paint It Black",self.song.song_name)
    
    
    
    
    
    