ages = [5,15,64,27,84,26]

odd_ages = [age for age in ages if age % 2 == 1]

print(odd_ages)

chicken_names = ["Hen Solo","Cluck Norris", "Hennifer Lopez","ChewPekka"]

more_than_ten = [chicken for chicken in chicken_names if len(chicken) > 10]

starts_with_h = [chicken for chicken in chicken_names if chicken[0] == "H"]


print(more_than_ten)

print(starts_with_h)



words = ["The","quick","brown","fox","jumped","over","the","lazy","dog"]

first_letter = [word[0] for word in words]

all_lowercase = [word.lower() for word in words]

print(first_letter)

print(all_lowercase)

