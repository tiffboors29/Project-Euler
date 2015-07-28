def sum_multiples(max)
    array = []
    (1..(max-1)).each do |n|
        if (n % 3 == 0) || (n % 5 == 0)
            array.push(n)
        end
    end
    sum = array.reduce(:+)
    return sum
end

sum_multiples(1000)
