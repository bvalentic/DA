function generate_random_number() {
    return mt_rand() / mt_getrandmax();
}

function generate_random_int($min, $max) {
    return mt_rand($min, $max);
}

function print_random_numbers() {
    for ($i = 0; $i < 5; $i++) {
        echo "$i: " . generate_random_number() . "\n";
    }
}

print_random_numbers();
