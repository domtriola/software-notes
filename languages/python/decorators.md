# Python Decorators

Python decorators give us a syntactic sugar for higher order functions. Decorators are used to extend or modify the behavior of functions without actually modifying the body of the function.

Here is an example of how we could use a higher order function to add logging to a method:

```python
def print_args(func):
    def wrapper(*args, **kwargs):
        print('Calling function <{}> with args: {}'.format(
            func.__name__,
            ', '.join([str(arg) for arg in args])))
        result = func(*args, **kwargs)
        print('Function <{}> finished'.format(func.__name__))
        return result
    return wrapper

def multiply(a, b):
    return a * b

# Creating the higher order function the long way:
multiply_with_logging = print_args(multiply)
multiply_with_logging(2, 3)
# => Calling function <multiply> with args: 2, 3
# => Function <multiply> finished
# => 6


# Decorator syntactic suger:
@print_args
def add(a, b):
    return a + b

add(4, 5)
# => Calling function <add> with args: 4, 5
# => Function <add> finished
# => 9
```
