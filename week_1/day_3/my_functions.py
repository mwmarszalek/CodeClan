# def greet(name, time_of_day):
#     return f'Good {time_of_day} {name}'

# name_1 = "Ash"
# time_of_day_1 = "Morning"
# greeting = greet(name_1,time_of_day_1)
# print(greeting)

# name_2 = "Ben"
# time_of_day_2 = "Afternoon"
# greeting = greet(name_2,time_of_day_2)
# print(greeting)


# def greet():
#     words = "Hey"
#     return words

# def greet_two():
#     return words
#     print(greet_two)


  
chickens = [
  { "name": "Margaret", "age": 2, "eggs": 0 },
  { "name": "Hetty", "age": 1, "eggs": 2 },
  { "name": "Henrietta", "age": 3, "eggs": 1 },
  { "name": "Audrey", "age": 2, "eggs": 0 },
  { "name": "Mabel", "age": 5, "eggs": 1 },
]


# def count_eggs(list):
#     total_eggs = 0

#     for bird in list:
#         total_eggs += bird["eggs"]
#         bird["eggs"] = 0 # eggs have been collected

#     return (f"{total_eggs} eggs collected")
    
# print(count_eggs(chickens))


# def find_chicken_by_name(chicken_list,chicken_name):

   

#     for chicken in chicken_list:
#         if chicken['name'] == chicken_name:
#             return chicken
#     return None

# chicken = find_chicken_by_name(chickens,"Audrey")
# print(chicken)




users = [
  { "user_id": 1, "first_name": "Guido", "last_name": "van Rossum" },
  { "user_id": 2, "first_name": "Katherine", "last_name": "Johnson" },
  { "user_id": 3, "first_name": "Dorothy", "last_name": "Vaughan" },
  { "user_id": 4, "first_name": "Hen", "last_name": "Solo" },
  { "user_id": 5, "first_name": "Mary", "last_name": "Jackson" },
]


def find_user(users,userid):

    for x in users:
        if x['user_id'] == userid:
            return x
    return None

desired_id = input('please enter the desired user ID> ')
desired_id = int(desired_id)

username = find_user(users,desired_id)
print(username)




