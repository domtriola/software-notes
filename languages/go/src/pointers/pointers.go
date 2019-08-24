// Notes from https://pocketgophers.com/why-use-pointers/

package main

import (
	"fmt"
	"time"
)

func main() {
	variableUpdate()
	memberUpdate()
	optimizedCall()
}

/*
 * Updating a variable from another function
 ****************************************************/
func inc(i int) {
	i++
}

func incPtr(i *int) {
	*i++
}

func variableUpdate() {
	i := 0

	// Try incrementing value
	inc(i)
	fmt.Println(i)
	// => 0  doesn't work

	// Try incrementing from pointer
	incPtr(&i)
	fmt.Println(i)
	// => 1  works
}

/*
 * Updating a field from a member function (method)
 ****************************************************/
type counter struct {
	count int
}

func (ct counter) inc() {
	ct.count++
}

func (ct *counter) incPtr() {
	ct.count++
}

func memberUpdate() {
	ct := counter{
		count: 0,
	}

	// Try incrementing value
	ct.inc()
	fmt.Println(ct.count)
	// => 0  doesn't work

	// Try incrementing from pointer
	ct.incPtr()
	fmt.Println(ct.count)
	// => 1  works
}

/*
 * Optimizing code by eliminating variable copies in function calls
 *********************************************************************/
type lotsOfThings struct {
	data   int
	things [1000000]string
}

func create() lotsOfThings {
	return lotsOfThings{}
}
func call(l lotsOfThings) {
	_ = l.data
}

func createPtr() *lotsOfThings {
	return &lotsOfThings{}
}

func callPtr(l *lotsOfThings) {
	_ = l.data
}

func optimizedCall() {
	// Call creates a copy of all things
	start := time.Now()
	things := create()
	call(things)
	end := time.Now()
	fmt.Println(end.Sub(start))
	// 61.062285ms

	// Call references the original things
	start = time.Now()
	thingsPtr := createPtr()
	callPtr(thingsPtr)
	end = time.Now()
	fmt.Println(end.Sub(start))
	// 2.594294ms
	// Note: also improves memory footprint
}
