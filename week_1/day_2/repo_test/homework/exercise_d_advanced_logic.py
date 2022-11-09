# For the following list of numbers:

numbers = [1, 6, 2, 2, 7, 1, 6, 13, 99, 7]

# 1. Print out a list of the even integers:

for x in numbers:
    if x % 2 == 0:
        print(x)


# 2. Print the difference between the largest and smallest value:

print(max(numbers) - min(numbers))
    
# 3. Print True if the list contains a 2 next to a 2 somewhere.

for x,y in enumerate(numbers):
    if numbers[x] == 2 and numbers[x+1] == 2:
        print(True)


         

# 4. Print the sum of the numbers, 
#    BUT ignore any section of numbers starting with a 6 and extending to the next 7.
#    
#    So [11, 6, 4, 99, 7, 11] would have sum of 22



def lvl_medium(lst):
    if 6 not in lst or 7 not in lst:
        print(0)
    else:
        print(sum((lst[0:lst.index(6)])+(lst[lst.index(7)+1:])))


lvl_medium(numbers)



# 5. HARD! Print the sum of the numbers. 
#    Except the number 13 is very unlucky, so it does not count.
#    And numbers that come immediately after a 13 also do not count.
#    HINT - You will need to track the index throughout the loop.
#
#    So [5, 13, 2] would have sum of 5. 


numbers = [1, 6, 2, 2, 7, 1, 6, 13, 99, 7]


# ignored_numbers = []

# for x,y in enumerate(numbers):
#     if numbers[x] == 13:
#         ignored_numbers.extend(range(x))
#     print(ignored_numbers)

total = 0
indices_of_13 = []
counter = 0

# for num in numbers:
#     if num == 13:
#         indices_of_13.append(num)
#         counter += 1
#     elif len(indices_of_13) != 0 and (indices_of_13[-1] == counter -1):
#         counter += 1
#         pass
#     else:
#         total += num
#         counter += 1

index = 0
total = 0

for number in numbers:
    if number == 13 or numbers[index-1] == 13:
        pass
    else:
        total += numbers
    index += 1

    
print(total)


