def triangular_number(n)
    return 0 if n < 0
    sum = 0
    (1..n).each { |i| sum += i }
    sum
end

p triangular_number(5) # Output: 15
p triangular_number(10) # Output: 55
