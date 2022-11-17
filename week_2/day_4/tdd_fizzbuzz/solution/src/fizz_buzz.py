def fizz_buzz(number):
    if number % 3 == 0 and number % 5 == 0:
        return "fizzbuzz"
    if number % 3 == 0:
        return "fizz"
    elif number % 5 == 0:
        return "buzz"
    return str(number)
