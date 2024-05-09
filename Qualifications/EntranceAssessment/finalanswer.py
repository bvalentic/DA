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
