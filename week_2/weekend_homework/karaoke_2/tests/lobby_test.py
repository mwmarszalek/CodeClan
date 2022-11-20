import unittest
from classes.lobby import Lobby


class TestLobby(unittest.TestCase):
    
    def setUp(self):
        
        self.lobby = Lobby(room_list=["Room 1","Room 2","Room 3"],guest_queue=["John","Daria","Jack"])
        
        self.new_room = "Room 4"
        
        
       
    def test_how_many_rooms(self):
        
        self.lobby.how_many_rooms()
        
        self.assertEqual(3,self.lobby.how_many_rooms())
        
       