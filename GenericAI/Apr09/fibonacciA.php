function fibonacci($n) {
    if($n <= 0) {
        return 0;
    } elseif($n == 1) {
        return 1;
    } else {
        return fibonacci($n-1) + fibonacci($n-2);
    }
}

function fibonacci($n) {
    if($n <= 0) {
        return 0;
    } elseif($n == 1) {
        return 1;
    } else {
        $fib = array(0, 1);
        for($i = 2; $i <= $n; $i++) {
            $fib[$i] = $fib[$i-1] + $fib[$i-2];
        }
        return $fib[$n];
    }
}
