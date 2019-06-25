package main

import "fmt"
import "strconv"

func main() {
  fmt.Printf("Running basic exercise tests...\n")

  fmt.Printf("-------------------------------\n")
  fmt.Printf("FizzBuzz:\n")
  fizzBuzz(16)

  fmt.Printf("-------------------------------\n")
  fmt.Printf("Fibonacci:\n")
  fmt.Printf("%d\n", fibonacci(1))
  fmt.Printf("%d\n", fibonacci(2))
  fmt.Printf("%d\n", fibonacci(3))
  fmt.Printf("%d\n", fibonacci(4))
  fmt.Printf("%d\n", fibonacci(5))
  fmt.Printf("%d\n", fibonacci(6))
}

// Each

// Reduce

// Unique

// Flatten

// Fizz-Buzz
func fizzBuzz(max int) {
  // TODO: how to declare array from input variable?
  // const aSize = max
  // var result [aSize]string

  result := make([]string, max)
  for i := 1; i <= max; i++ {
    switch {
    case i % 15 == 0:
      result[i - 1] = "FizzBuzz"
    case i % 3 == 0:
      result[i - 1] = "Fizz"
    case i % 5 == 0:
      result[i - 1] = "Buzz"
    default:
      result[i - 1] = strconv.Itoa(i)
    }
  }

  for _, val := range result {
    fmt.Printf("%s\n", val)
  }
}

// Fibonacci
func fibonacci(num int) (fib int) {
  if num < 2 {
    return 1
  }

  return fibonacci(num - 2) + fibonacci(num - 1)
}

// Merge Sort
