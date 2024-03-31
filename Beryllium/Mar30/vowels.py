def count_vowels(input_string):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in input_string:
        if char in vowels:
            count += 1
    return count

str_arr = ["hello", "world", "PYTHON", "sdfgh", "bookkeeper"]
for str in str_arr:
   print(f"Number of vowels in '{str}' : ", count_vowels(str))

