from src.customer import Customer


class Pub:
    
    def __init__(self,name,till,drinks):
        self.name = name
        self.till = till
        self.drinks = []
        
    def increase_till(self,cash):
        self.till += cash
        
    def sell_drink(self,drink,customer):
        
        self.increase_till(drink.price)
        customer.decrease_wallet(drink.price)
        
    def check_age(self,customer):
        if customer.age >= 18:
            return True
        return False
    
    def refuse_to_sell(self,customer):
        if customer.drunkeness > 10:
            return True
        return False
        
            
    


            
           