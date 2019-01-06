# Python Syntax, Tips, and Best Practices

Notes from [Effective Python](https://effectivepython.com/)

* [Python Zen](#python-zen)
* [Bytes and Strings](#bytes-and-strings)
* [Slicing](#slicing)
* [Comprehensions](#comprehensions)

## Python Zen

```python
import this
```

## Bytes and Strings

In Python 3 it is important to know what is bytes and what is a string, because
they are not equal (like they sometimes are in Python 2).

```python
b'' == '' # Python 2
b'' != '' # Python 3

bytes = b'string'
string = u'string'

print(bytes)
# => b'string'

print(string)
# => string

print(bytes.decode('utf-8'))
# => string

print(string.encode('utf-8'))
# => b'string'
```

## Slicing

`[start:end:stride]`

* Start: the index to start taking from
* End: the index where taking stops (exclusive)
* Stride: the size of the step taken for each successive take

```python
items = ['a', 'b', 'c', 'd', 'e']

# Shallow copy
items[:] # ['a', 'b', 'c', 'd', 'e']

# First X (take)
items[:2] # ['a', 'b']

# All but first X (drop)
items[2:] # ['c', 'd', 'e']

# Last X
items[-2:] # ['d', 'e']

# All but last X
items[:-2] # ['a', 'b', 'c']

# Evens
items[::2] # ['a', 'c', 'e']

# Odds
items[1::2] # ['b', 'd']


# Visual Example (don't include 0 or end values in actual code)
# [start:end:stride]
end = len(items)
items[0:end:1]     # ['a', 'b', 'c', 'd', 'e']
items[0:2:1]       # ['a', 'b']
items[2:end:1]     #           ['c', 'd', 'e']
items[-2:end:1]    #                ['d', 'e']
items[0:-2:1]      # ['a', 'b', 'c']
items[0:end:2]     # ['a',      'c',      'e']
items[1:end:2]     #      ['b',      'd']


# Slicing does not mind out of bounds values:
items[:10]
# => ['a', 'b', 'c', 'd', 'e']
```

## Comprehensions

* Prefer comprehensions over map/filter + lambdas
* Don't use comprehensions for overly complex scenarios (e.g. mapping with multiple inputs, deeply nested lists)
* 2 dimensional nesting is ok for comprehensions (see last example)

```python
nums = [1, 2, 3, 4, 5, 6]

doubled = [num * 2 for num in nums]
# => [2, 4, 6, 8, 10, 12]

doubled_evens = [num * 2 for num in nums if num % 2 == 0]
# => [4, 8, 12]

matrix = [[1, 2], [3, 4], [5, 6]]
flattened = [el for row in matrix for el in row]
# => [1, 2, 3, 4, 5, 6]
```
