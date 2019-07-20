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
* [Package Management](https://github.com/Masterminds/glide)

## Key Features

* **Programming Paradigm**: Imperative
* **Typing Discipline**: Static

### Concurrency

### Channels
