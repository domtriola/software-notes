doRelativeFile("exercises.io")

# Each
numbers := list(1, 2, 3)
numbers myEach(method(el, write("#{el}, " interpolate)))
# => 1, 2, 3,

"" println

# Reduce
summed := Enum reduce(numbers, method(accum, el, accum + el))
summed println
# => 6

# Unique
duplicates := list(1, 1, 2, 3, 2, 4, 2)
Enum unique(duplicates) println
# => list(1, 2, 3, 4)

# Flatten
nested := list(1, list(2, list(3)), list(4, 5), 6)
nested flatten println
# => list(1, 2, 3, 4, 5, 6)

# FizzBuzz
fizzBuzz(16) println
# => list(1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16)

# Fibonacci
fibonacci(1) println # => list(1)
fibonacci(2) println # => list(1, 1)
fibonacci(8) println # => list(1, 1, 2, 3, 5, 8, 13, 21)

# Merge Sort
mergeSort(list(9, 8, 7, 1, 4, 3, 2, 5, 6)) println
# => list(1, 2, 3, 4, 5, 6, 7, 8, 9)
