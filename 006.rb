class SumSquareDifference
    attr_reader :answer

    def initialize(range)
        @range = range
        @answer = difference
    end

    def difference
        sum_of_squares - square_of_sum
    end

    def sum_of_squares
        @range.map{|n| n**2}.reduce(:+)
    end

    def square_of_sum
        (@range.reduce(:+))**2
    end
end

puts SumSquareDifference.new(1..10).answer
