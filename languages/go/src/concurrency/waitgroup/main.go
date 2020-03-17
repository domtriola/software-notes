package main

import (
	"compress/gzip"
	"fmt"
	"io"
	"os"
	"sync"
)

// An example of using a Wait Group
// Notes from: https://www.manning.com/books/go-in-practice

// go run main.go example_files/*

func compress(filename string) error {
	in, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer in.Close()

	out, err := os.Create(filename + ".gz")
	if err != nil {
		return err
	}
	defer out.Close()

	gzout := gzip.NewWriter(out)
	_, err = io.Copy(gzout, in)
	gzout.Close()

	return err
}

func main() {
	var wg sync.WaitGroup

	var i int = -1
	var file string
	for i, file = range os.Args[1:] {
		wg.Add(1) // increment count of things the wait group should wait for
		go func(filename string) {
			compress(filename)
			wg.Done() // signal that the goroutine finished
		}(file) // must pass arg to closure to capture current value for each goroutine
	}
	wg.Wait() // wait for all scheduled tasks to finish

	fmt.Printf("Compressed %d files\n", i+1)
}
