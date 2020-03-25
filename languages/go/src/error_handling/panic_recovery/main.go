package main

import (
	"bufio"
	"errors"
	"fmt"
	"net"
)

// Notes from: https://www.manning.com/books/go-in-practice

// $ telnet localhost 1026
// Trying ::1...
// Connected to localhost.
// Escape character is '^]'.
// test
// test
// Connection closed by foreign host.
// $

func main() {
	listen()
}

func listen() {
	listener, err := net.Listen("tcp", ":1026")
	if err != nil {
		fmt.Println("Failed to open port on 1026")
	}

	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Error accepting connection")
			continue
		}
		go handle(conn)
	}
}

func handle(conn net.Conn) {
	reader := bufio.NewReader(conn)
	data, err := reader.ReadBytes('\n')
	if err != nil {
		fmt.Println("Failed to read from socket.")
		conn.Close()
	}
	panicResponse(data, conn)
}

func response(data []byte, conn net.Conn) {
	defer func() {
		conn.Close()
	}()
	conn.Write(data)
}

func panicResponse(data []byte, conn net.Conn) {
	// Crashes the server if not handled properly
	panic(errors.New("failure in response"))
}
