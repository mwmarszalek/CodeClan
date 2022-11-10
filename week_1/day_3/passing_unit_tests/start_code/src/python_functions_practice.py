def return_10():
    return 10

def add(a,b):
    return a+b

def subtract(a,b):
    return a-b

def multiply(a,b):
    return a*b

def divide(a,b):
    return a/b

def length_of_string(str):
    return(len(str))

def join_string(str1,str2):
    return str1+str2

def add_string_as_number(a,b):
    return int(a) + int(b)

def number_to_full_month_name(number):
    months = {1 : "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"}
    return months[number]

def number_to_short_month_name(number):
    months_short = {1 : "Jan",
            2: "February",
            3: "March",
            4: "Apr",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "Oct",
            11: "November",
            12: "December"}
    return months_short[number]


####### FURTHER ###################

def volume_of_cube(side):
    return side **3


def reverse_string(str):
    return str[::-1]

def fahrenheit_to_celsius(f):
    return (f-32) /1.8

