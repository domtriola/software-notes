package main

import (
	"fmt"
	"runtime"
	"time"
)

// Notes from: https://www.manning.com/books/go-in-practice

func printNums(c chan int) {
	num := 0
	for num >= 0 {
		// Listen for input
		num = <-c
		time.Sleep(time.Millisecond * 100)
		fmt.Print(num, "\n")
	}
}

func BasicExample() {
	// Create a channel
	c := make(chan int)
	// Include -1 to eventually stop channel from listening
	nums := []int{4, 0, 9, 3, 1, 6, -1}

	go printNums(c)

	for _, num := range nums {
		c <- num
	}

	fmt.Println("This will print just before the last number, because of the delay before the printNums Print command")
	// If we don't sleep here the program will exit before the last -1 is printed
	time.Sleep(time.Millisecond * 101)
}

func DelayWithClosure() {
	fmt.Println("Do something now")

	go func() {
		fmt.Println("Do something eventually")
	}()

	fmt.Println("Do something now")

	// Yield to scheduler by sleeping
	time.Sleep(time.Millisecond * 1)
}

func main() {
	BasicExample()

	// Yield to scheduler so we print the last of the basic example async stuff
	// before moving on to the next method
	runtime.Gosched()

	DelayWithClosure()
}
