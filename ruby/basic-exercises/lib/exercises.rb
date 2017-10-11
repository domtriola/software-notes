require 'set'

# Each
class Array
  def my_each(&prc)
    length.times { |index| prc.call(self[index]) }
    self
  end
end

# Reduce
class Array
  def my_reduce(seed = nil, &prc)
    result = seed || self[0]

    if seed
      index = 0
    else
      index = 1
    end

    while index < length
      result = prc.call(result, self[index])

      index += 1
    end

    result
  end
end

# Unique
class Array
  def my_uniq
    seen = Set.new
    result = []

    each do |el|
      result << el unless seen.include?(el)
      seen.add(el)
    end

    result
  end
end

# Flatten
class Array
  def my_flatten
    result = []

    each do |el|
      if el.class == Array
        result.concat(el.my_flatten)
      else
        result << el
      end
    end

    result
  end
end

# Fizz-Buzz
def fizz_buzz(max)
  result = []

  (1..max).each do |el|
    if el % 15 == 0
      result << "FizzBuzz"
    elsif el % 3 == 0
      result << "Fizz"
    elsif el % 5 == 0
      result << "Buzz"
    else
      result << el
    end
  end

  result
end

# Fibonacci
def fibonacci(n)
  result = [1, 1]
  return result.take(n) if n < 3

  index = 2
  while index < n
    result << result[index - 1] + result[index - 2]

    index += 1
  end

  result
end

# Merge Sort
def merge_sort(array)
  return array if array.length < 2

  left = array.take(array.length / 2)
  right = array.drop(array.length / 2)

  merge(merge_sort(left), merge_sort(right))
end

def merge(left, right)
  result = []

  until left.empty? || right.empty?
    if left.first < right.first
      result << left.shift
    else
      result << right.shift
    end
  end

  result + left + right
end
