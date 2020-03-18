package main

import (
	"fmt"
	"os"
	"time"
)

/*
 * Basic channel example
 ************************************/

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

/*
 * Closing channels
 ***************************/

func chantBad() {
	msg := make(chan string)
	until := time.After(5 * time.Second)
	go sendBad(msg)
	for {
		select {
		case m := <-msg:
			fmt.Println(m)
		case <-until:
			close(msg) // Closes channel, but send will still try to send to it, cuasing a panic
			time.Sleep(500 * time.Millisecond)
			return
		}
	}
}

func sendBad(ch chan<- string) {
	for {
		ch <- "hello"
		time.Sleep(500 * time.Millisecond)
	}
}

// Better to use an additional channel to say when you're done
func chant() {
	msg := make(chan string)
	done := make(chan bool)
	until := time.After(2 * time.Second)
	go send(msg, done)
	for {
		select {
		case m := <-msg:
			fmt.Println(m)
		case <-until:
			done <- true
			time.Sleep(500 * time.Millisecond)
			return
		}
	}
}

func send(ch chan<- string, done <-chan bool) {
	for {
		select {
		case <-done: // The sender should be the one to close the channel when it recieves a signal to do so by the receiver
			println("Done")
			close(ch)
			return
		default:
			ch <- "hello"
			time.Sleep(500 * time.Millisecond)
		}
	}
}

/*
 * Closing channels
 ***************************/

// Channels can be used as locks if needed to be, but sync is probably preferred
// in most scenarios
func channelLock() {
	lock := make(chan bool, 1) // creating a buffered channel with only 1 spot means only one message can be processed at a time
	for i := 1; i < 7; i++ {
		go worker(i, lock)
	}
	time.Sleep(10 * time.Second)
}

func worker(id int, lock chan bool) {
	fmt.Printf("%d wants the lock\n", id)
	lock <- true // claim the lock by queuing a message
	fmt.Printf("%d has the lock\n", id)
	time.Sleep(500 * time.Millisecond)
	fmt.Printf("%d is releasing the lock\n", id)
	<-lock // release the lock by reading off of it
}

func main() {
	// echo()
	// chantBad()
	// chant()
	channelLock()
}
