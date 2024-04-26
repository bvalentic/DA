def parse(message_file):
    with open(message_file) as file:
        return {line.split()[0]: line.split()[1].strip() for line in file}

def get_triangular_numbers(max):
    return [round((n*(n+1))/2) for n in range(1, max) if round((n*(n+1))/2) <= max]

def decode(message_file):
    decodedDict = parse(message_file)
    triangular_numbers = get_triangular_numbers(len(decodedDict))
    return ' '.join(decodedDict[str(n)] for n in triangular_numbers)
