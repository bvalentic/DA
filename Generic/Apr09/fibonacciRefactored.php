function fibonacci($n) {
    if($n <= 0) {
        return 0;
    } elseif($n == 1) {
        return 1;
    } else {
        return fibonacci($n-1) + fibonacci($n-2);
    }
}

// improved with memoization

function fibonacci($n, $memo = array()) {
    if($n <= 0) {
        return 0;
    } elseif($n == 1) {
        return 1;
    } elseif(isset($memo[$n])) {
        return $memo[$n];
    } else {
        $result = fibonacci($n-1, $memo) + fibonacci($n-2, $memo);
        $memo[$n] = $result;
        return $result;
    }
}

// tabulation

function fibonacci($n) {
    $fib = array(0, 1);
    for($i = 2; $i <= $n; $i++) {
        $fib[$i] = $fib[$i-1] + $fib[$i-2];
    }
    return $fib[$n];
}
