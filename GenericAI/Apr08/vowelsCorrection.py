def count_vowels(input_string):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in input_string:
        if char in vowels:
            count += 1
    return count

str_arr = ["hello", "world", "PYTHON", "sdfgh", "bookkeeper"]
for s in str_arr:
   print(f"Number of vowels in '{s}' : ", count_vowels(s))
