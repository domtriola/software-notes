package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
)

func main() {
	hello := "hello.txt"
	secrets := "../sensitive/secrets.txt"

	fmt.Println("Bad...")
	getFileBad(hello)
	getFileBad(secrets)

	fmt.Println("----------------------------")

	fmt.Println("Good...")
	getFileGood(hello)
	getFileGood(secrets)
}

func getFileGood(filename string) {
	workingDir, _ := os.Getwd()
	appDir := workingDir
	path := filepath.Clean(workingDir + "/" + filename)

	if filepath.Dir(path) != appDir {
		log.Fatalln("Not authorized")
	}

	data, err := ioutil.ReadFile(path)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(string(data))
}

func getFileBad(filename string) {
	workingDir, _ := os.Getwd()
	data, err := ioutil.ReadFile(workingDir + "/" + filename)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(string(data))
}
