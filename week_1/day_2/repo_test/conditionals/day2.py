# SET  is_it_raining = INPUT "is it raining?"
# IF is_it_raining is "yes"
#   THEN PRINT "You should take the car"
#ELSE:
#  IF distance < 5
#    THEN PRINT "You should walk"
#  ELSE
#   

distance = 4
is_it_raining = input("Is it raining?")

if is_it_raining == "yes":
    print("You should take the car")
else:
    if distance < 5:
        print("You should walk")
    else:
        print("You should get the bus")


