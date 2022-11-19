# creating a simple list of numbers

my_nums = [23,14,2,6,8]

# creating a function that takes in a list. the function uses for loop to iterate through each element of the list and print the element squared:

def my_list_squared(list):
    
     for item in list:
         print(item **2)
        
# ass igning function to variable 'result'

result = my_list_squared(my_nums)

# printing result variable

print(result)
        
    