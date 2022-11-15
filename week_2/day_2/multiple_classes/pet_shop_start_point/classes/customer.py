class Customer:
    
    def __init__(self, name, cash): #pets):
        self.name = name
        self.cash = cash
        #self.pets = pets
        
    def add_pet(self,pet):
        self.pets.append(pet)
        
    def remove_cash(self,cash):
        self.cash -= cash
        
        
    
        
