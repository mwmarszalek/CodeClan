

def fizzbuzz(num):
    divisible_by_3 = num % 3 ==0
    divisible_by_5 = num % 5 ==0
    
    
    if divisible_by_3 and divisible_by_5:
        return "FizzBuzz"
    if divisible_by_3:
        return "Fizz"
    if divisible_by_5:
        return "Buzz"
    return f"{num}"