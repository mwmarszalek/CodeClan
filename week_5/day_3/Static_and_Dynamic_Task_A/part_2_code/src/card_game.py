### Testing task 2 code:

# Carry out dynamic testing on the code below.

# Correct the errors below that you spotted in task 1.

class CardGame:


  def check_for_ace(self, card):
    if card.value == 1: # should be '=='
      return True
    else: # should have ':' at the end
      return False
   

  def highest_card(self, card1, card2): # should be 'def' # there is no ',' between parameters
    if card1.value > card2.value: # no indentation in if statement
      return card1.value #should be card1.value
    else:
      return card2.value #should be card2.value
  


  def cards_total(self, cards): #no identation
    total = 0 # variable not assigned. should be total = 0
    for card in cards:
      total += card.value
    return f'You have a total of {total}' #can only concatenate str! // no whitespace at the end of string
  