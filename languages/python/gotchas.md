# Python Gotchas

* [Default Args](#default-args)
* [Floating Point Arithmetic](#floating-point-arithmetic)

## Default Args

Setting certain default arguments in Python can result in some unnexpected behavior.

For example:
```python
class NumberContainer():
    def __init__(self, nums=[]):
        self.nums = nums

num_container = NumberContainer()
num_container.nums.append(1)
num_container.nums
# >>> [1]

other_num_container = NumberContainer()
other_num_container.nums # The is the same list as num_container.nums!!
# >>> [1]
```

This was particularly confusing for me, because I learned Ruby before Python. Here's how Ruby handles the same scenario:
```ruby
class NumberContainer
  attr_accessor :nums

  def initialize(nums=[])
    @nums = nums
  end
end

num_container = NumberContainer.new()
num_container.nums.push(1)
num_container.nums
# >>> [1]

other_num_container = NumberContainer.new()
other_num_container.nums # other_num_container has its own array
# >>> []
```

## Floating Point Arithmetic

https://docs.python.org/2/tutorial/floatingpoint.html
