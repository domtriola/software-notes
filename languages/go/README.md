# Go

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Key Features](#key-features)

## Overview

Go is a statically typed imperative language with a C-like syntax. It is attempts to be safe and efficient to compile and run, while at the same time not sacrificing too much developer productivity. It also attempts to provide a better way to handle concurrency (based on the Communicating Sequential Processes (CSP) approach).

## Getting Started

[Official Site](https://golang.org)

* [Install Go](https://golang.org/doc/install#install)
* Set working go path: `export $GOPATH=$HOME/go`
* Compile:
  * `go build`: creates executables in same location as source files
  * or `go install` creates executables in `bin/`
* Clean up: `go clean -i`
* Run a single file: `go run path/filename.go`
* [Package Management](https://github.com/golang/go/wiki/Modules)
* Find docs for any package or module: `go doc <package>.<Module>`

## Key Features

* **Programming Paradigm**: Imperative
* **Typing Discipline**: Static

### Concurrency

Go's Communicating Sequential Processes (CSP) concurrency approach uses goroutines and channels. A **goroutine** is a function that is called by another function, but runs independent of its caller. A **channel** is a pipeline that functions can use to pass data to each other.

[Examples](./src/concurrency)

### Pointers

There are a few cases for which pointers can be used in Go:

* Update a variable from another function
* Update a field from a member function (method)
* Optimizing code by eliminating variable copies in function calls

See [pointers.go](./src/pointers/pointers.go) for examples.

You can use the `new` function to create a new variable but return only a pointer to it.

For example:

```go
func newInt() *int {
  var num int
  return &num
}

ptr := newInt()
// works the same as:
otherPtr := new(int)
```
