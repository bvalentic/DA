def scrabble_score(word):
    # Define the Scrabble scores for each letter
    scores = {
        'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
        'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
        'k': 5,
        'j': 8, 'x': 8,
        'q': 10, 'z': 10
    }

    # Initialize total score
    total_score = 0

    # Convert word to lowercase and calculate score
    for char in word.lower():
        if char in scores:
            total_score += scores[char]

    return total_score

test_word = "hello"
test_score = scrabble_score(test_word)
print(f"Scrabble score of '{test_word}' is {test_score}")
