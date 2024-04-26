import ktrain

# Load and preprocess text data
(x_train, y_train), (x_test, y_test), preproc = ktrain.text.texts_from_folder(
    'Shared\o-captain.txt', 
    preprocess_mode='bert'  # Crucial!
)

# Build a text classifier using BERT
model = ktrain.text.text_classifier('bert', (x_train, y_train), preproc=preproc) 
