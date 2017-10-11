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
end

# Fibonacci
def fibonacci(max)
end

# Merge Sort
def merge_sort(array)
end

# Quick Sort
def quick_sort(array)
end
