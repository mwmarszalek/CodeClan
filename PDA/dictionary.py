# creating a simple dictionary:

my_dict = {"name":"Daria","age":27,"profession":"psychologist"}


# creating a function using the above dictionary. the function returns f statement using values from dictionary:

def get_persons_name_age(dict):
    
    return f"The person's name is {dict['name']} and she is {dict['age']} years old"

# assigning and calling function inside a variable
result = get_persons_name_age(my_dict)

# printing result
print(result)