import random

random.seed("Hello World")

def generate_random_number():
    return random.random()

def generate_random_int(min, max):
    return random.randint(min, max)

def print_random_numbers():
    for i in range(5):
        print (str(i) + ": " + str(generate_random_number()))

print_random_numbers()
