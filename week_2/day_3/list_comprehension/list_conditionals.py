# numbers = range(1,11)
# evens_squared = []

# for number in numbers:
#     if number % 2 == 0:
#         evens_squared.append(number * number)

# print(evens_squared)


# evens_squared = [expression for item in list if condition]


numbers = range(1,11)


evens_squared = [number * number for number in numbers if number % 2 == 0]

print(evens_squared)

## DOES THE SAME THING AS FOR LOOP