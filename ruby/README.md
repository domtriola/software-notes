# Ruby

## Overview

Ruby is an object-oriented language that is pleasantly concise and human-readable. Ruby's emphasis is on developer joy, and it has become a popular choice for commercial web projects. The Rails framework is a great tool to quickly spin up web applications. Ruby is not heavily opinionated about how to express things with the language, allowing you to decide your own code style. The Rails framework is more opinionated, preferring convention over configuration. This is opposite of Python (another strong, dynamic language with a similar concise feel), which tries to emphasize 'one way to do things' in the language, but frameworks like Django leave the configuration up to you.

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

Everything is an object (well almost everything -- blocks aren't and neither are general language constructs like 'if'). You can trace every object back to the BasicObject class.

```ruby
 [1] pry(main)> class Cat
 [1] pry(main)* end  
 => nil
 [2] pry(main)> whiskers = Cat.new
 => #<Cat:0x007ffc739efa58>
 [3] pry(main)> whiskers.class
 => Cat
 [4] pry(main)> Cat.class
 => Class
 [5] pry(main)> Class.class
 => Class
 [6] pry(main)> Class.superclass
 => Module
 [7] pry(main)> Module.superclass
 => Object
 [8] pry(main)> Object.superclass
 => BasicObject
 [9] pry(main)> Cat.superclass
 => Object

 [10] pry(main)> 7.class
 => Fixnum
 [11] pry(main)> 7.class.superclass.superclass.superclass.superclass
 => BasicObject

```
