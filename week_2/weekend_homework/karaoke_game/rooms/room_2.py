pets = [{
    "Mr. Whiskers": {
        "pet_type": "Cat",
        "breed": "British Shorthair",
        "age": 2,
        "price": 200
        },
    "Snowflake": {
        "pet_type": "Cat",
        "breed": "Raggdoll",
        "age": 4,
        "price": 400
        },
        
    "Rex": {
        "pet_type": "Dog",
        "breed": "German Sheperd",
        "agae": 1,
        "price": 300
        },
    "Chase": {
        "pet_type": "Dog",
        "breed": "Golden Retriver",
        "age": 2,
        "price": 500
        }
}]

# print(pets)

def get_pet_by_pet_type(pets, type):
    pet_types = []
    for item in pets:
        print(item["*"])
        
    

print(get_pet_by_pet_type(pets, "Dog"))