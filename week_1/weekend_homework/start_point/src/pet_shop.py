# WRITE YOUR FUNCTIONS HERE

def get_pet_shop_name(pet_shop):
    return pet_shop["name"]

def get_total_cash(pet_shop):
    return pet_shop['admin']['total_cash']

def add_or_remove_cash(pet_shop,cash):
    pet_shop['admin']['total_cash'] += cash
    
def get_pets_sold(pet_shop):
    return pet_shop['admin']['pets_sold']

def increase_pets_sold(pet_shop,num):
    pet_shop['admin']['pets_sold'] += num

def get_stock_count(pet_shop):
    return len(pet_shop['pets'])

def get_pets_by_breed(pet_shop,name):

    new_list = []

    for pet in pet_shop['pets']:
        
        if pet['breed'] == name:
            new_list.append(pet)

    return new_list

def find_pet_by_name(pet_shop,name):
    
    for pet in pet_shop["pets"]:

        if pet['name'] == name:
            return pet
    return None

def remove_pet_by_name(pet_shop,name):

    found_pet = find_pet_by_name(pet_shop,name)

    pet_shop['pets'].remove(found_pet)


        
def add_pet_to_stock(pet_shop,new_pet):

   
    pet_shop['pets'].append(new_pet)


def get_customer_cash(customers):

    return customers['cash']

  
def remove_customer_cash(customers,cash):

   customers['cash'] -= cash

   
def get_customer_pet_count(customers):

    return len(customers['pets'])


def add_pet_to_customer(customers,new_pet):

    customers['pets'].append(new_pet)


def customer_can_afford_pet(customers,new_pet):

    if customers['cash'] >= new_pet['price']:
        return True
    else:
        return False


def sell_pet_to_customer(pet_shop, pet, customer):
     
    



        

        
        

        


    

     

    

   

    



    