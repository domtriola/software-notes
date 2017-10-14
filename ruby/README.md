# Ruby

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Key Features](#key-features)
  * [Everything is an Object](#everything-is-an-object)
  * [Blocks, Procs, and Lambdas](#blocks-procs-and-lambdas)
  * [Metaprogramming](#metaprogramming)

## Overview

Ruby is an object-oriented language that is pleasantly concise and human-readable. Ruby's emphasis is on developer joy, and it has become a popular choice for commercial web projects. The Rails framework is a great tool to quickly spin up web applications. Ruby is not heavily opinionated about how to express things with the language, allowing you to decide your own code style. The Rails framework is more opinionated, preferring convention over configuration. This is opposite of Python (another strongly typed, dynamic language with a similar concise feel), which has the philosophy of 'one right way to do things' in the language, but frameworks like Django leave the configuration up to you.

## Getting Started

[Official Site](https://www.ruby-lang.org/en/)

* [Install Ruby](https://www.ruby-lang.org/en/downloads/)
* Execute a ruby file: `ruby code.rb`
* Run ruby in an interpreter: `irb` (or `pry` for a better experience)
* Use gems to enhance projects: `gem install GEMNAME`
* Use [Bundler](http://bundler.io/) to manage your gems

## Key Features

* **Programming Paradigm**: Object-oriented - Reflective
* **Typing Discipline**: Dynamic - Strong - Duck

### Everything is an Object
Well almost everything -- blocks aren't objects and neither are general language constructs like 'if'. You can trace every object back to the BasicObject class.

```ruby
class Cat
end

whiskers = Cat.new      # => #<Cat:0x007ffc739efa58>
whiskers.class          # => Cat
Cat.class               # => Class
Class.class             # => Class
Class.superclass        # => Module
Module.superclass       # => Object
Object.superclass       # => BasicObject
Cat.superclass          # => Object

1.class
# => Fixnum
1.class.superclass.superclass.superclass.superclass  
# => BasicObject

''.class
# => String
''.class.superclass.superclass
# => BasicObject

:*.class
# => Symbol
:*.class.superclass.superclass
# => BasicObject
```

### Blocks, Procs, and Lambdas

#### Blocks

Blocks are like unnamed anonymous functions. They are not objects.

```ruby
[1, 2, 3].map { |el| el * 2 }
# => [2, 4, 6]

[1, 2, 3].map do |el|
  el * 2
end
# => [2, 4, 6]
```

#### Procs

Procs are like anonymous functions that can be saved for later. They are objects.
```ruby
double = Proc.new { |el| el * 2 }

double.call(4)
# => 8

# Procs can be turned into blocks
[1, 2, 3].map(&double)
# => [2, 4, 6]
```

#### Lambdas

Lamdas are procs that behave a bit differently.

The first difference is that lambdas enforce arity, while procs do not.
```ruby
lam = lambda { |x| p x }
lam.arity                # => 1
lam.call('1', '2')       # => ArgumentError: wrong number of arguments (given 2, expected 1)

prc = proc { |x| p x }
prc.arity                # => 1
prc.call('1', '2')       # => '1'
```

The second difference is how they handle scope. Returning in a proc exits the proc and returns from whatever scope the proc is defined in. Returning in a lambda only returns in the lambda's scope when it is called.

Here is a practical example of when lambdas are helpful:
```ruby
# Let's say you would like to assemble a chess board with different pieces.
# Each piece needs to be instantiated with its position.
# One way you could create the board is to plan it out with strings, and then
# use a map of lambdas to create the pieces.
GRID = [
  "ee",
  "er"
].freeze

# Lambdas
PIECES = {
  r: lambda { |pos| return Rook.new(pos) },
  e: lambda { |_| return NullPiece.instance }
}.freeze

def instantiate_board(grid)
  grid.map.with_index do |row, y|
    row.split("").map.with_index do |space, x|
      PIECES[space.to_sym].call([x, y])
    end
  end
end
```
See the [full example](./involved-exercises/lambda.rb).

### Metaprogramming

See the [involved exercise](./involved-exercises/metaprogramming) on metaprogramming in Ruby
