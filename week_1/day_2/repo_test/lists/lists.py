# create empty lists

empty_1 = []
empty_2 = list()


# create a list with items

fruits = ['apple','banana','orange']

print(fruits[0])

# reassign value on index
fruits[1] = 'plum'

print(fruits)

# get the number of items

# print(len(fruits))

# remove last element

removed_fruit = fruits.pop()

print(f'I removed {removed_fruit}')
#add a new fruit

fruits.append('pear')

print(fruits)