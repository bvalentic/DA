
// A

function calculateQuadraticRoots($a, $b, $c) {
    $determinant = $b * $b - 4 * $a * $c;
    
    if ($determinant > 0) {
        $root1 = (-$b + sqrt($determinant)) / (2 * $a);
        $root2 = (-$b - sqrt($determinant)) / (2 * $a);
        return array($root1, $root2);
    } elseif ($determinant == 0) {
        $root = -$b / (2 * $a);
        return array($root);
    } else {
        $realPart = -$b / (2 * $a);
        $imaginaryPart = sqrt(-$determinant) / (2 * $a);
        return array($realPart . " + " . $imaginaryPart . "i", $realPart . " - " . $imaginaryPart . "i");
    }
}

// B

function calculateQuadraticRoots($a, $b, $c) {
    $discriminant = $b * $b - 4 * $a * $c;
    
    if ($discriminant > 0) {
        $root1 = (-$b + sqrt($discriminant)) / (2 * $a);
        $root2 = (-$b - sqrt($discriminant)) / (2 * $a);
        return array($root1, $root2);
    } elseif ($discriminant == 0) {
        $root = -$b / (2 * $a);
        return array($root);
    } else {
        $realPart = -$b / (2 * $a);
        $imaginaryPart = sqrt(-$discriminant) / (2 * $a);
        return array($realPart . " + " . $imaginaryPart . "i", $realPart . " - " . $imaginaryPart . "i");
    }
}
