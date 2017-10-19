doRelativeFile("exercises.io")

# Each
numbers := list(1, 2, 3)
numbers myEach(method(el, write("#{el}, " interpolate)))

println

# Reduce
summed := Enum reduce(numbers, method(accum, el, accum + el))
summed println # => 6

# Unique
duplicates := list(1, 1, 2, 3, 2, 4, 2)
Enum unique(duplicates) println

# Flatten
nested := list(1, list(2, list(3)), list(4, 5), 6)
nested flatten println

# FizzBuzz
fizzBuzz(16) println
