# In this exercise, you will develop a function named decode(message_file). This function should read an encoded message from a .txt file and return its decoded version as a string.

# Note that you can write your code using any language and IDE you want (Python is preferred if possible, but not mandatory).

# Your function must be able to process an input file with the following format:

# 3 love
# 6 computers
# 2 dogs
# 4 cats
# 1 I
# 5 you
# In this file, each line contains a number followed by a word. The task is to decode a hidden message based on the arrangement of these numbers into a "pyramid" structure. The numbers are placed into the pyramid in ascending order, with each line of the pyramid having one more number than the line above it. The smallest number is 1, and the numbers increase consecutively, like so:

#   1
#  2 3
# 4 5 6
# The key to decoding the message is to use the words corresponding to the numbers at the end of each pyramid line (in this example, 1, 3, and 6). You should ignore all the other words. So for the example input file above, the message words are:

# 1: I
# 3: love
# 6: computers
# and your function should return the string "I love computers".

# triangular numbers: [n(n+1)]/2
# Example input:
# 3 love
# 6 computers
# 2 dogs
# 4 cats
# 1 I
# 5 you

# split text file by /n, then "" once in lines (dictionary?)
# use triangular numbers to determine necessary keys/numbers
# append values to decoded_message


def parse(message_file):
    file = open(message_file)
    file_lines = file.readlines()
    file.close()

    parsed_list = {}
    for line in file_lines:
        item = line.split(" ")
        parsed_list[item[0]] = item[1].strip("\n")
    return parsed_list

def get_triangular_numbers(max):
    numbers = []
    n = 1

    while (n < max):
        num_tri = round((n*(n+1))/2)
        if(num_tri > max):
            return numbers
        else:
            numbers.append(num_tri)
        n += 1

def decode(message_file):
    decoded_message = ""
    decodedDict = parse(message_file)

    max = len(decodedDict)
    triangular_numbers = get_triangular_numbers(max)
    n = 0

    while (n < len(triangular_numbers)):
        tri_num = triangular_numbers[n]
        decoded_message += decodedDict[str(tri_num)] + " "
        n += 1

    return decoded_message.strip()

print(decode("input.txt"))
print(decode("fullinput.txt"))
