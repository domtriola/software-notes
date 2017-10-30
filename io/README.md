# Io

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Key Features](#key-features)
  * [Introspection](#introspection)
  * [Prototypal Inheritance](#prototypal-inheritance)
  * [Messages and Receivers](#messages-and-receivers)
  * [Metaprogramming](#metaprogramming)
  * [Concurrency](#concurrency)
* [Pros and Cons](#pros-and-cons)
  * [Pros](#pros)
  * [Cons](#cons)

## Overview

Io is a prototypal language in which every action is a messages. Just about everything is an object, and everything happens by sending messages to objects.

My first impression of Io wasn't great. The documentation is sparse, and it's quite difficult to look up information online, partly because the name "Io" is not the easiest to find relevant results for in a search engine, and partly because there's just not that much information out there. This can make it a frustrating language to work with. However, Io is syntactically quite simple, and it does have a lot of helpful introspection tools that help mitigate against the lack of thorough documentation.

## Getting Started

[Official Site](http://iolanguage.org/)

* [Install Io](https://github.com/stevedekorte/io#installing)
* [Alternative Install Instructions](https://en.wikibooks.org/wiki/Io_Programming/Beginner%27s_Guide/Getting_Started#Install)
* Execute an Io file: `io code.io`
* Open the Io interpreter: `io`

## Key Features

* **Programming Paradigm**: Prototypal - Object-oriented
* **Typing Discipline**: Dynamic - Strong

### Introspection

Io's documentation is sparse. But it does have a lot of helpful introspection methods.

```io
# See every named object that you have created
Lobby

# See slots on an object
Object slotNames

# Check an object's type
Object type

# Check an object's prototype
Object proto

# List the core objects
Lobby Protos Core slotNames

# Get the value of a slot without invoking it
Object getSlot("slotName")

# Use "code" to return a normalized string representation of a method
method(el, i, el * i) code
```

### Prototypal Inheritance

Everything is an object and only an object (there are no classes). Objects are just collections of "slots", which contain more objects. New objects are created by cloning existing objects (prototypes). If a message is sent to an object and the object doesn't know how to respond it forwards the message to its prototype.

```io
Canis := Object clone
Canis description := "A scary creature with prominent canine teeth"
Lupus := Canis clone
rufus := Lupus clone

Canis type println          # => Canis
Canis slotNames println     # => list(type, description)

Lupus type println          # => Lupus
Lupus slotNames println     # => list(type)

rufus slotNames println     # => list()
rufus type println          # => Canis
rufus description println   # => A scary creature with prominent canine teeth
```

![Scary Fangs](./images/scary_fangs.jpeg)

### Messages and Receivers

All actions are messages. Even expressions like "if" and "for" are just messages that objects respond to. Messages have a sender, a target, and arguments.

```io
# Helpful message keywords can be accessed from an object's "call" slot:
message
sender
target

# Using message introspection to write an until loop
until := method(
  while(call sender doMessage(call message argAt(0)) not,
    call sender doMessage(call message argAt(1))
  )
)

i := 0
until(i == 3,
  i println
  i := i + 1
)
# => 0
# => 1
# => 2

# And if you're into the whole brevity thing, the until method could also be written as:
until := method(
  while(call evalArgAt(0) not,
    call evalArgAt(1)
  )
)
```

### Metaprogramming

Io lends itself well to metaprogramming, because it doesn't have much of a limit on what you can change. You can extend, or completely rewrite any of its core methods.

```io
# Let's add a NAND gate as a basic operator.

# Lists existing operators
OperatorTable

# Creates an operator with level of precedence set to 10
OperatorTable addOperator("nand", 10)

# We still need to create the methods for nand before it will do anything
true nand false
# =>  Exception: true does not respond to 'nand'

# Let's implement nand for true and false
true nand := method(bool, if(bool, false, true))
false nand := method(bool, true)

true nand false        # => true
true nand true         # => false
false nand false       # => true
false nand true        # => true

```

### Concurrency

Io uses coroutines, actors, and futures to implement concurrent behavior. Coroutines are functions that can yield to other processes. Actors process messages in queues with coroutines. Futures are like placeholder objects that will be assigned a value when a concurrent process finishes. An object becomes an actor whenever an asynchronous message is sent to it.

```io
countToMillion := method(
  number := 0
  for(i, 0, 1000000, number = i)
  return number
)

countToHalfMillion := method(
  number := 0
  for(i, 0, 500000, number = i)
  return number
)

countSync := method(
  "Starting synchronous count..." println
  result := countToMillion
  "We waited for the count before resuming" println

  result println
)

# firstHalf and secondHalf are each assigned as a FutureProxy by calling
# countToHalfMillion asynchronously with '@'. Functions can also be called
# asynchronously with '@@' which immediately returns nil instead of a future.
countAsync := method(
  "Starting asynchronous count..." println
  firstHalf := @countToHalfMillion
  secondHalf := @countToHalfMillion
  "Counting..." println

  # If we don't interpolate and instead try `firstHalf + secondHalf` we'll get:
  # Exception: argument 0 to method '+' must be a Number, not a 'FutureProxy'
  "#{firstHalf} + #{secondHalf} = #{firstHalf + secondHalf}" interpolate println
)

Date secondsToRun(countSync) println
"" println
Date secondsToRun(countAsync) println

# Starting synchronous count...
# <1.7 second delay>
# We waited for the count before resuming
# 1000000
# 1.751409
#
# Starting asynchronous count...
# Counting...
# <1.7 second delay>
# 500000 + 500000 = 1000000
# 1.7431449999999999
```

I was hoping to see the asynchronous example take half the time as the synchronous example, but it appears the actors did not execute the messages in parallel.

## Pros and Cons

### Pros

* Simple and easy to learn syntax

### Cons

* Small community and lack of thorough documentation. This is the biggest con for me. The absence of documentation for most of Io's core methods and functionality was frustrating and tasks that should have been trivial turned into daunting scavenger hunts for information on how particular aspects of the language work.
* Simple syntax. The syntax was easy to learn, but I have found Io programs to have poor human-readability.
* Poor performance. This is only one specific comparison, but in the concurrency example it took Io almost 2 seconds to count to 1 million. Doing the same thing in Ruby or Python (both languages that are already on the lower end of the performance spectrum) takes closer to .2 seconds.
