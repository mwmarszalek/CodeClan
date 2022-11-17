import unittest
from modules.fizzbuzz import fizzbuzz

class FizzbuzzTest(unittest.TestCase):
    
    def test_number_divisible_by_3(self):
        input = 9
        expected_output = "Fizz"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output,actual_output)
        
        
        
    def test_number_divisible_by_5(self):
        input = 10
        expected_output = "Buzz"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output,actual_output)
        
    def test_number_divisible_by_5_and_3(self):
        input = 15
        expected_output = "FizzBuzz"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output,actual_output)
        
    def test_number_not__divisible_by_5_and_3(self):
        input = 17
        expected_output = "17"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output,actual_output)
        
