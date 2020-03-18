package main

import (
	"fmt"
	"os"
	"time"
)

func echo() {
	done := time.After(30 * time.Second) // 'done' is a channel that will recieve a message after 30 sec
	echo := make(chan []byte)            // channel for passing bytes from stdin to stdout
	go readStdin(echo)
	for {
		select {
		case buf := <-echo:
			os.Stdout.Write(buf)
		case <-done:
			fmt.Println("Timed out")
			os.Exit(0)
		}
	}
}

func readStdin(out chan<- []byte) { // being explicit about channel direction ensures we only write to out, and not read as well
	for {
		data := make([]byte, 1024)
		l, _ := os.Stdin.Read(data)
		if l > 0 {
			out <- data
		}
	}
}

func main() {
	echo()
}
