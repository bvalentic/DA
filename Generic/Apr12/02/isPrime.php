class PrimeChecker {
    public static function IsPrime($n) {
        if ($n < 2) return false; // 0, 1, and negative numbers are not prime
        if ($n % 2 == 0) return false; // quickly check if divisible by 2

        $sqrt_n = floor(sqrt($n));

        for ($i = 3; $i <= $sqrt_n; $i++) {
            if ($n % $i == 0) return false;
        }

        return true;
    }
}
