# Io

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Key Features](#key-features)
* [Pros and Cons](#pros-and-cons)
  * [Pros](#pros)
  * [Cons](#cons)

## Overview

The language is syntactically very simple.

My first impression of Io wasn't great. The documentation is sparse, and it's quite difficult to look up information online, partly because the name "Io" is not the easiest to find relevant results for in a search engine, and partly because there's just not that much information out there. This makes it a frustrating language to work with, unless you're up to the task of diving into the source code.

## Getting Started

[Official Site](http://iolanguage.org/)

* [Install Io](https://github.com/stevedekorte/io#installing)
* [Alternative Install Instructions](https://en.wikibooks.org/wiki/Io_Programming/Beginner%27s_Guide/Getting_Started#Install)
* Execute an Io file: `io code.io`
* Open the Io interpreter: `io`

## Key Features

* **Programming Paradigm**: Prototypal - Object-oriented
* **Typing Discipline**: Dynamic - Strong

### Lack of Documentation

Io's documentation is sparse. But it does have a lot of helpful introspection. I'm including "Lack of Documentation" as a feature mostly just so I can have a place to keep notes on the various introspection tools, as well as other miscellaneous information that I had a difficult time finding on my own.
```io
# See every named object that you have created
Lobby

# See slots on an object
Object slotNames

# Check an object's type
Object type

# Check an object's prototype
Object proto

# Use doFile like an importer when running io scripts
# Imports relative to wherever command is run
doFile("exercises.io")
# Imports relative to file the import is in
doRelativeFile("exercises.io")
```

### Prototypal Inheritance

Everything is an object and only an object (there are no classes). Objects are just collections of "slots", which contain more objects. New objects are created by cloning existing objects (prototypes). If a message is sent to an object and the object doesn't know how to respond it forwards the message to its prototype.
```io
Canis := Object clone
Canis description := "A scary creature with prominent canine teeth"
Lupus := Canis clone
rufus := Canis clone

Canis type println          # => Canis
Canis slotNames println     # => list(type, description)

Lupus type println          # => Lupus
Lupus slotNames println     # => list(type)

rufus slotNames println     # => list()
rufus type println          # => Canis
rufus description println   # => A scary creature with prominent canine teeth
```

### Messages and Receivers

Interactions with objects are messages. Io's syntax is very minimal. Even expressions like "if" and "for" are just messages that objects respond to.

### Metaprogramming

Io lends itself well to metaprogramming, because it doesn't have much of a limit on what you can change.
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

## Pros and Cons

### Pros

### Cons
