import unittest
from src.card import Card
from src.card_game import CardGame
import src.card_game as card_game

class TestCardGame(unittest.TestCase):
    
    def setUp(self):
        self.card = Card("Ace",1)
        self.card1 = Card("Queen",4)
        self.card2 = Card("King",3)
        self.cards = [self.card,self.card1,self.card2]
        self.card_game = CardGame()
        
    
    
    def test_check_for_ace(self):
        self.assertEqual(True,self.card_game.check_for_ace(self.card))
   
    
    def test_highest_card(self):
        self.assertEqual(4,self.card_game.highest_card(self.card1,self.card2))
        
        
    def test_cards_total(self):
        self.assertEqual("You have a total of 8",self.card_game.cards_total(self.cards))