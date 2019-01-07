# Python Syntax, Tips, and Best Practices

Notes from [Effective Python](https://effectivepython.com/)

* [Python Zen](#python-zen)
* [Bytes and Strings](#bytes-and-strings)
* [Slicing](#slicing)
* [Comprehensions](#comprehensions)
* [Generators](#generators)
* [Enumerate](#enumerate)
* [Zip](#zip)
* [Closures](#closures)

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

## Generators

Generators can be used for large data sets instead of comprehensions when memory is a concern (like for large files or potentially never-ending streams). Generators let us process data in chunks, rather than in one large list.

```python
really_large_file = "I'm a really large file...".split(' ')

# Comprehension creates one large list to store the entire file:
lines = [line for line in really_large_file]
lines
# => ["I'm", 'a', 'really', 'large', 'file...']

# A generator allows us to read the lines one at a time (or in however large of batches we decide is appropriate):
line_iterator = (line for line in really_large_file)
next(line_iterator)
# => "I'm"
next(line_iterator)
# => "a"
next(line_iterator)
# => "really"
# etc...
```

### Generator Functions

It can be beneficial to create generator functions rather than returning lists. This makes the function more consise, and let's the caller of the function handle the result in a memory-cautious way if necessary.

```python
# Returning a list
def indexes_of_letter(text, letter):
    indexes = []
    for i, char in enumerate(text):
        if char == letter:
            indexes.append(i)
    return indexes

indexes_of_letter('Fizz buzz', 'z')
# => [2, 3, 7, 8]

# Returning an iterator
def indexes_of_letter_it(text, letter):
    for i, char in enumerate(text):
        if char == letter:
            yield i

indexes_of_letter_it('Fizz buzz', 'z')
# => <generator object indexes_of_letter_it at 0x105fabcf0>
list(indexes_of_letter_it('Fizz buzz', 'z'))
# => [2, 3, 7, 8]
```

## Enumerate

Use `enumerate` rather than `range` for cleaner iterations when an index is needed.

```python
values = ['first', 'second', 'third']

# Range
for i in range(len(values)):
    print('{}: {}'.format(i + 1, values[i]))
# => 1: first
# => 2: second
# => 3: third

# Enumerate (second value is the number the iterator starts counting from)
for i, value in enumerate(values, 1):
    print('{}: {}'.format(i, value))
# => 1: first
# => 2: second
# => 3: third
```

## Zip

Use zip to iterate over two lists of the same length when the values have corresponding indexes.

```python
words = ['hello', 'mississippi', 'bye']
letter_counts = [len(word) for word in words]

max_letters = 0
longest_word = None
for word, letter_count in zip(words, letter_counts):
    if letter_count > max_letters:
        max_letters = letter_count
        longest_word = word

print(longest_word)
# => mississippi
```

## Closures

Variables can be enclosed with functions inside functions.

```python
def sort_with_priority(numbers, priority_group):
    """
    Returns True if we find any numbers in the priority group
    """
    found = False
    def group_by_priority(x):
        # Prefer a class instance with state rather than the nonlocal keyword
        nonlocal found
        if x in priority_group:
            # NOTE: this would create a new variable in the current function
            # scope if we didn't specify that found has a 'nonlocal' scope above
            found = True
            # sort compares the first values of tuples first, then the second, etc.
            return (0, x)
        return (1, x)
    numbers.sort(key=group_by_priority)
    return found

numbers = [6, 2, 4, 1, 7, 9, 8, 3, 5]
priority_group = {5, 7, 9}

sort_with_priority(numbers, priority_group)
# => True
numbers
# => [5, 7, 9, 1, 2, 3, 4, 6, 8]
```
