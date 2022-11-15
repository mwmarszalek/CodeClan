class PetShop:
    
    def __init__(self,name,pets,total_cash):
        self.name = name
        self.pets = pets
        self.total_cash = total_cash
        self.pets_sold = 0
        
    def stock_count(self):
        return len(self.pets)
    
    
    def increase_pets_sold(self):
        
        self.pets_sold += 1
        
    def increase_total_cash(self,cash):
        
        self.total_cash += cash
        
    def remove_pet(self,pet):
        
        self.pets.remove(pet)
        
    def find_pet_by_name(self,name):
        
        for item in self.pets:
            if item.name == name:
                return item
        return None
    
    
    
    
    
            
        