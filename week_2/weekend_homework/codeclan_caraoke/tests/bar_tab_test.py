import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room
from classes.bar_tab import Bar_tab


class TestBar(unittest.TestCase):
    
    def setUp(self):
        self.bar = Bar_tab({"entry_fees":250})