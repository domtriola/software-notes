package main

// Notes from https://www.manning.com/books/go-in-practice

import (
	"fmt"
	"time"
)

func printNums(c chan int) {
	num := 0
	for num >= 0 {
		// Listen for input
		num = <-c
		time.Sleep(time.Millisecond * 100)
		fmt.Print(num, "\n")
	}
}

func main() {
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
