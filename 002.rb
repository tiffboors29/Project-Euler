def fibonacci(max)
    fib_array = [1, 2]
    (1..max).each do |n|
        fib_array.push(fib_array[n] + fib_array[n-1])
    end
    return fib_array
end

def sum_evens(max)
    fib_array = fibonacci(max)
    fib_array.select(&:even?).reduce(:+)
end

sum_evens(30)
