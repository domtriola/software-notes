package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"sync"
)

/**********************************************************
 * Bad
 **********************************************************/

// Contains race-condition
// Works if given one file, but if given multiple files this will break with
// fatal error: concurrent map read and map write
// Call with the --race flag to get better info about where the race condition
// might be happening.
// ex: go run --race concurrency/mutex/main.go concurrency/example_files/*

type wordsBad struct {
	found map[string]int
}

func (w *wordsBad) add(word string, n int) {
	count, ok := w.found[word]
	if !ok {
		w.found[word] = n
		return
	}
	w.found[word] = count + n
}

func newWordsBad() *wordsBad {
	return &wordsBad{found: map[string]int{}}
}

func tallyWordsBad(filename string, w *wordsBad) error {
	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanWords)
	for scanner.Scan() {
		word := strings.ToLower(scanner.Text())
		w.add(word, 1)
	}

	return scanner.Err()
}

func wordCountBad() {
	var wg sync.WaitGroup

	w := newWordsBad()
	for _, f := range os.Args[1:] {
		wg.Add(1)
		go func(filename string) {
			// All goroutines will be competing to write to w
			if err := tallyWordsBad(filename, w); err != nil {
				fmt.Println(err.Error())
			}
			wg.Done()
		}(f)
	}
	wg.Wait()

	fmt.Println("Words that appear more than once:")
	for word, count := range w.found {
		if count > 1 {
			fmt.Printf("%s: %d\n", word, count)
		}
	}
}

/**********************************************************
 * Better
 **********************************************************/

type words struct {
	sync.Mutex
	found map[string]int
}

func (w *words) add(word string, n int) {
	w.Lock()
	defer w.Unlock() // use defer to help prevent deadlock
	count, ok := w.found[word]
	if !ok {
		w.found[word] = n
		return
	}
	w.found[word] = count + n
}

func newWords() *words {
	return &words{found: map[string]int{}}
}

func tallyWords(filename string, w *words) error {
	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanWords)
	for scanner.Scan() {
		word := strings.ToLower(scanner.Text())
		w.add(word, 1)
	}

	return scanner.Err()
}

func wordCount() {
	var wg sync.WaitGroup

	w := newWords()
	for _, f := range os.Args[1:] {
		wg.Add(1)
		go func(filename string) {
			// All goroutines will be competing to write to w
			if err := tallyWords(filename, w); err != nil {
				fmt.Println(err.Error())
			}
			wg.Done()
		}(f)
	}
	wg.Wait()

	fmt.Println("Words that appear more than once:")
	// Lock not really needed here, since all routines will be done, but better to
	// be explicit and safe.
	w.Lock()
	for word, count := range w.found {
		if count > 1 {
			fmt.Printf("%s: %d\n", word, count)
		}
	}
	w.Unlock()
}

func main() {
	// wordCountBad()
	wordCount()
}
