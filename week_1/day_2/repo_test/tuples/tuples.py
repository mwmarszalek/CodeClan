# define a non-empty tuple

car = ('Ford','Escort',1300,'Red')
car_2 = 'Ford','Escort',1300,'Red'


#define an empty tuple

empty_tuple = ()
empty_tuple_2 = tuple()

# access by index

model = car[1]

print(model)

# can't modify though!

# car[1] = 'Focus'

tuple_count = len(car)

print(tuple_count)

fruits = ('apple','apple','banana')

print(fruits.count('apple'))


# tuple of a single element

single_tuple = ('ben',)
