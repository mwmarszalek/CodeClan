customers = [
    {
        "name": "Alice",
        "pets": [],
        "cash": 1000
    },
    {
        "name": "Bob",
        "pets": [],
        "cash": 50
    },
    {
        "name": "Jack",
        "pets": [],
        "cash": 100
    }
]

new_pet = {
    "name": "Bors the Younger",
    "pet_type": "cat",
    "breed": "Cornish Rex",
    "price": 100
}

cc_pet_shop = {
    "pets": [
        {
            "name": "Sir Percy",
            "pet_type": "cat",
            "breed": "British Shorthair",
            "price": 500
        },
        {
            "name": "King Bagdemagus",
            "pet_type": "cat",
            "breed": "British Shorthair",
            "price": 500
        },
        {
            "name": "Sir Lancelot",
            "pet_type": "dog",
            "breed": "Pomsky",
            "price": 1000,
        },
        {
            "name": "Arthur",
            "pet_type": "dog",
            "breed": "Husky",
            "price": 900,
        },
        {
            "name": "Tristan",
            "pet_type": "cat",
            "breed": "Basset Hound",
            "price": 800,
        },
        {
            "name": "Merlin",
            "pet_type": "cat",
            "breed": "Egyptian Mau",
            "price": 1500,
        }
    ],
    "admin": {
        "total_cash": 1000,
        "pets_sold": 0,
    },
    "name": "Camelot of Pets"
}


def find_pet_by_name(pet_shop,name):
    
    for pet in pet_shop["pets"]:

        if pet['name'] == name:
            return pet
    return None

def get_customer_pet_count(customers):

    return len(customers['pets'])



def get_pets_sold(pet_shop):
    return pet_shop['admin']['pets_sold']


def get_customer_cash(customers):

    return customers['cash']


def get_total_cash(pet_shop):
    return pet_shop['admin']['total_cash']


def sell_pet_to_customer(pet_shop, pet, customer):
     

    for item in pet_shop["pets"]:

        if item['name'] == pet['name']:
            customer['pets'].append(pet['name'])
            pet_shop['admin']['pets_sold'] += 1
        else:
            return print('lol')

            
        




    


pet = find_pet_by_name(cc_pet_shop,"Arthur")

sell_pet_to_customer(cc_pet_shop, pet, customers)