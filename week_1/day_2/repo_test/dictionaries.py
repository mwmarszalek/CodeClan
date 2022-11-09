meals = ('yoghurt','roll','steak')

print(meals[0])


my_first_empty_dictionary = {}

my_second_empty_dictionary = dict()

meals =  {"breakfast":"yoghurt","lunch":"roll","dinner":"steak"}

print(meals)

things = {1 : "2","steve": [1,2,3]}

# print(things)

# print(meals["breakfast"])

# print(meals["dinner"])

print("breakfast" in meals)


meals["supper"] = "pancakes"
print(meals)

del(meals["breakfast"])

print(meals)


print(list(meals))
print(meals.keys())
print(meals.values())


countries = {
    "uk" : {"capital":"London","population":1000},
    "germany" : {"capital":"Berlin","population":5000}
}

print(countries["germany"]["population"])


# Make a dictionary called avengers. It should contain keys for Iron Man and Hulk.

# Each avenger is represented by another dictionary, and has a name (Tony Stark and Bruce Banner respectively) and another dictionary containing their attacks.

# Each attack should have an int value of the attack's power. Iron man can punch (10) and kick (100) and Hulk can smash (1000) and roll (500).

# Once you have created the dictionary, retrieve and print out the attack power of Hulks smash move.





avengers = {

    "Iron Man" : {"Tony Stark":{"punch":10,"kick":100}},
    "Hulk" : {"Bruce Banner":{"smash":1000,"roll":500}}
}

print(avengers["Hulk"]["Bruce Banner"]["smash"])








